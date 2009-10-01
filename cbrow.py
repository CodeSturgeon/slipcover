import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.HTML import HTML
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas import Window
from editor import Editor
from viewer import Viewer

from pyjamas.ui.Button import Button
from pyjamas.ui.Grid import Grid
from pyjamas.HTTPRequest import HTTPRequest
from pyjamas.JSONParser import JSONParser

if __name__ == '__main__':
    pyjd.setup("public/cbrow.html")

    full_url = Window.getLocation().getHref()
    db_url = '/'.join(full_url.split('/')[:4])+'/'
    editor_panel = VerticalPanel()
    editor = Editor(db_url, editor_panel)
    viewer = Viewer(db_url, RootPanel(), editor.loadDocument)
    sep = HTML('<hr style="height:10" />')
    editor.onModuleLoad()
    viewer.onModuleLoad()
    RootPanel().add(sep)
    RootPanel().add(editor_panel)
    viewer.setView('_all_docs')

    pyjd.run()
