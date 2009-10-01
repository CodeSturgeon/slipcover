import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.Label import Label
from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.HTTPRequest import HTTPRequest
from pyjamas.JSONParser import JSONParser
from pyjamas import Window

class DocLoader:
    def __init__(self, editor):
        self.editor = editor

    def onCompletion(self, text):
        self.editor.updateDoc(text)

    def onError(self, text):
        Window.alert(text)

class DocSaver:
    def __init__(self, editor):
        self.editor = editor

    def onCompletion(self, text):
        # Never gets called due to 201 problem...
        pass

    def onError(self, text):
        obj = JSONParser().decode(text)
        # Hack for 201 being seen as error
        if not obj['ok']:
            Window.alert(text)
        else:
            self.editor.reloadDocument()

class Editor:
    def __init__(self, db_url, parent_panel):
        self.db_url = db_url
        self.doc_id = None
        self.parent_panel = parent_panel

    def loadDocument(self, doc_id):
        # Load document into editor
        HTTPRequest().asyncGet(None, None, url=self.db_url+doc_id,
                                handler=DocLoader(self))
    def reloadDocument(self):
        if self.doc_id is None:
            Window.Alert('Trying to reload blank doc')
        else:
            self.loadDocument(self.doc_id)

    def updateDoc(self, json):
        doc_obj = JSONParser().decode(json)
        self.doc_id = doc_obj['_id']
        self.id_label.setText('ID : %s'%doc_obj['_id'])
        self.rev_label.setText('REV: %s'%doc_obj['_rev'])
        self.save_button.setEnabled(True)
        self.doc_area.setText(json)
        self.doc_area.setEnabled(True)
        self.doc_area.setFocus(True)

    def testy(self):
        Window.open(url='http://localhost:5984/relaxer',name='noogit')

    def saveDocument(self):
        self.doc_area.setEnabled(False)
        self.save_button.setEnabled(False)
        HTTPRequest().asyncPut(None, None, url=self.db_url+self.doc_id,
                                postData=self.doc_area.getText(),
                                handler=DocSaver(self))

    def onModuleLoad(self):
        # Editor
        self.editor_panel = VerticalPanel()
        self.id_label = Label('ID: ')
        self.editor_panel.add(self.id_label)
        self.rev_label = Label('REV: ')
        self.editor_panel.add(self.rev_label)
        self.doc_area = TextArea()
        self.doc_area.setCharacterWidth(80)
        self.doc_area.setVisibleLines(24)
        self.doc_area.setEnabled(False)
        self.editor_panel.add(self.doc_area)
        self.parent_panel.add(self.editor_panel)

        # Buttons
        self.button_panel = HorizontalPanel()
        self.save_button = Button("Save", self.saveDocument)
        self.save_button.setEnabled(False)
        self.button_panel.add(self.save_button)
        self.parent_panel.add(self.button_panel)

if __name__ == '__main__':
    pyjd.setup("public/editor.html")

    full_url = Window.getLocation().getHref()
    db_url = '/'.join(full_url.split('/')[:4])+'/'
    doc_id = '002aee2de7875f1145f6cf8b5e2e1290'
    vsp = VerticalPanel()
    RootPanel().add(vsp)
    editor = Editor(db_url, vsp)
    editor.onModuleLoad()
    editor.loadDocument(doc_id)

    pyjd.run()
