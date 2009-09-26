import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.Grid import Grid
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
    def __init__(self, db_url, parent_panel, doc_callback):
        self.db_url = db_url
        self.parent_panel = parent_panel
        self.doc_callback = doc_callback

    def onModuleLoad(self):
        self.grid = Grid()
        # Note: The resize method args are Rows,Cols (Curses style)
        self.grid.resize(1,3)
        self.grid.setBorderWidth(1)
        self.grid.setHTML(0,0,'ID')
        self.grid.setHTML(0,1,'Revision')
        self.grid.setHTML(0,2,'Delete')
        self.grid.addTableListener(self)
        #self.grid.setText('Hello world')
        self.parent_panel.add(self.grid)

    def populate(self, json):
        view_obj = JSONParser().decode(json)
        data = view_obj['rows']
        self.grid.resize(len(data)+1,3)
        for row_num in range(len(data)):
            self.grid.setHTML(row_num+1, 0, data[row_num]['key'])
            self.grid.setHTML(row_num+1, 1, data[row_num]['value']['rev'])
            self.grid.setHTML(row_num+1, 2, '<b>X O X</b>')

    def onCellClicked(self, sender, row, col):
        doc_id = self.grid.getHTML(row, 0)
        if col == 2:
            doc_rev = self.grid.getHTML(row, 1)
            url = self.db_url+doc_id+'?rev='+doc_rev
            HTTPRequest().asyncDelete(None, None, url=url,
                                        handler=DeleteHandler(self))
        else:
            self.doc_callback(doc_id)

    def loadView(self, view_url):
        HTTPRequest().asyncGet(None, None, url=self.db_url+view_url,
                                handler=ViewLoader(self))

if __name__ == '__main__':
    pyjd.setup("public/viewer.html?fred=foo#me")

    db_url = 'http://localhost:5984/relaxer/'
    view_url = '_all_docs'
    viewer = Viewer(db_url, RootPanel(), Window.alert)
    viewer.onModuleLoad()
    viewer.loadView(view_url)

    pyjd.run()
