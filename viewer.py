import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.Grid import Grid
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.HTTPRequest import HTTPRequest
from pyjamas.JSONParser import JSONParser
from pyjamas import Window

class ViewLoader:
    def __init__(self, viewer):
        print 'loader init'
        self.viewer = viewer

    def onCompletion(self, body):
        print 'complete'
        self.viewer.populate(body)

    def onError(self, text):
        Window.alert(text)

class DeleteHandler:
    def __init__(self, viewer):
        print 'init'
        self.viewer = viewer

    def onCompletion(self, body):
        print 'comp'
        Window.alert('Deleted!')

    def onError(self, body):
        print 'err'
        Window.alert(body)

class Viewer:
    def __init__(self, db_url, parent_panel, doc_callback=None, page_size=5):
        self.db_url = db_url
        self.parent_panel = parent_panel
        self.doc_callback = doc_callback
        self.page_size = page_size

    def onModuleLoad(self):
        self.grid = Grid()
        # Note: The resize method args are Rows,Cols (Curses style)
        self.grid.resize(1,3)
        self.grid.setBorderWidth(1)
        self.grid.setHTML(0,0,'ID')
        self.grid.setHTML(0,1,'Revision')
        self.grid.setHTML(0,2,'Delete')
        self.grid.addTableListener(self)
        self.parent_panel.add(self.grid)

        ## Buttons
        self.button_panel = HorizontalPanel()
        # Prev
        self.prev_button = Button("Previous", self.prevPage)
        self.prev_button.setEnabled(False)
        self.button_panel.add(self.prev_button)
        self.next_button = Button("Next", self.nextPage)
        self.next_button.setEnabled(False)
        self.button_panel.add(self.next_button)
        self.parent_panel.add(self.button_panel)

    def populate(self, json):
        view_obj = JSONParser().decode(json)
        data = view_obj['rows']
        num_rows = len(data)
        
        self.first_key = data[0]['key']

        if num_rows > self.page_size:
            print 'nk: %s'%self.next_key
            self.next_key = data[-1:][0]['key']
            print 'nk: %s'%self.next_key
            self.next_button.setEnabled(True)
            self.grid.resize(self.page_size+1,3)
        else:
            self.grid.resize(num_rows+1,3)

        for row_num in range(num_rows):
            if row_num < self.page_size:
                self.grid.setHTML(row_num+1, 0, data[row_num]['key'])
                self.grid.setHTML(row_num+1, 1, data[row_num]['value']['rev'])
                self.grid.setHTML(row_num+1, 2, '<b>X O X</b>')
        
        if len(self.prev_keys)>0:
            self.prev_button.setEnabled(True)

    def onCellClicked(self, sender, row, col):
        doc_id = self.grid.getHTML(row, 0)
        if col == 2:
            doc_rev = self.grid.getHTML(row, 1)
            url = self.db_url+doc_id+'?rev='+doc_rev
            HTTPRequest().asyncDelete(None, None, url=url,
                                        handler=DeleteHandler(self))
        else:
            self.doc_callback(doc_id)

    def nextPage(self):
        self.prev_keys.append(self.first_key)
        self.loadPage(self.next_key)

    def prevPage(self):
        self.loadPage(self.prev_keys.pop())

    def setView(self, view_path, first_key = None):
        self.view_path = view_path
        self.prev_keys = []
        self.next_key = None
        self.loadPage(first_key)

    def loadPage(self, startkey=None):
        limit = int(self.page_size)+1
        view_url = self.db_url+self.view_path+'?limit=%d'%limit
        if startkey is not None:
            view_url += '&startkey="%s"'%startkey

        self.next_button.setEnabled(False)
        self.prev_button.setEnabled(False)
        HTTPRequest().asyncGet(None, None, url=view_url,
                                handler=ViewLoader(self))

if __name__ == '__main__':
    pyjd.setup("public/viewer.html")

    full_url = Window.getLocation().getHref()
    db_url = '/'.join(full_url.split('/')[:4])+'/'
    view_url = '_all_docs'
    viewer = Viewer(db_url, RootPanel(), Window.alert, page_size=10)
    viewer.onModuleLoad()
    viewer.setView(view_url)

    pyjd.run()
