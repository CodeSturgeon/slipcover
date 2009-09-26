/* start module: cbrow */
var cbrow = $pyjs.loaded_modules["cbrow"] = function (__mod_name__) {
if(cbrow.__was_initialized__) return cbrow;
cbrow.__was_initialized__ = true;
if (__mod_name__ == null) __mod_name__ = 'cbrow';
var __name__ = cbrow.__name__ = __mod_name__;
pyjslib.__import__(['pyjd'], 'pyjd', 'cbrow');
cbrow.pyjd = $pyjs.__modules__.pyjd;
pyjslib.__import__(['pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel'], 'pyjamas.ui.RootPanel.RootPanel', 'cbrow');
cbrow.RootPanel = $pyjs.__modules__.pyjamas.ui.RootPanel.RootPanel;
pyjslib.__import__(['pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML'], 'pyjamas.ui.HTML.HTML', 'cbrow');
cbrow.HTML = $pyjs.__modules__.pyjamas.ui.HTML.HTML;
pyjslib.__import__(['pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel'], 'pyjamas.ui.VerticalPanel.VerticalPanel', 'cbrow');
cbrow.VerticalPanel = $pyjs.__modules__.pyjamas.ui.VerticalPanel.VerticalPanel;
pyjslib.__import__(['pyjamas.Window', 'pyjamas'], 'pyjamas.Window', 'cbrow');
cbrow.Window = $pyjs.__modules__.pyjamas.Window;
pyjslib.__import__(['editor.Editor', 'editor'], 'editor.Editor', 'cbrow');
cbrow.Editor = $pyjs.__modules__.editor.Editor;
pyjslib.__import__(['viewer.Viewer', 'viewer'], 'viewer.Viewer', 'cbrow');
cbrow.Viewer = $pyjs.__modules__.viewer.Viewer;
pyjslib.__import__(['pyjamas.ui.Button.Button', 'pyjamas.ui.Button'], 'pyjamas.ui.Button.Button', 'cbrow');
cbrow.Button = $pyjs.__modules__.pyjamas.ui.Button.Button;
pyjslib.__import__(['pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid'], 'pyjamas.ui.Grid.Grid', 'cbrow');
cbrow.Grid = $pyjs.__modules__.pyjamas.ui.Grid.Grid;
pyjslib.__import__(['pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest'], 'pyjamas.HTTPRequest.HTTPRequest', 'cbrow');
cbrow.HTTPRequest = $pyjs.__modules__.pyjamas.HTTPRequest.HTTPRequest;
pyjslib.__import__(['pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser'], 'pyjamas.JSONParser.JSONParser', 'cbrow');
cbrow.JSONParser = $pyjs.__modules__.pyjamas.JSONParser.JSONParser;
if (pyjslib.bool(pyjslib.eq(cbrow.__name__, String('__main__')))) {
	cbrow.pyjd.setup(String('public/cbrow.html?fred=foo#me'));
	cbrow.db_url = String('http://localhost:5984/relaxer/');
	cbrow.editor_panel = cbrow.VerticalPanel();
	cbrow.editor = cbrow.Editor(cbrow.db_url, cbrow.editor_panel);
	cbrow.viewer = cbrow.Viewer(cbrow.db_url, cbrow.RootPanel(), (typeof cbrow.editor.loadDocument == 'function' && cbrow.editor.__is_instance__?pyjslib.getattr(cbrow.editor, 'loadDocument'):cbrow.editor.loadDocument));
	cbrow.sep = cbrow.HTML(String('\x3Chr style=\x22height:10\x22 /\x3E'));
	cbrow.editor.onModuleLoad();
	cbrow.viewer.onModuleLoad();
	cbrow.RootPanel().add(cbrow.sep);
	cbrow.RootPanel().add(cbrow.editor_panel);
	cbrow.viewer.loadView(String('_all_docs'));
	cbrow.pyjd.run();
}
return this;
}; /* end cbrow */
$pyjs.modules_hash['cbrow'] = $pyjs.loaded_modules['cbrow'];


 /* end module: cbrow */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Window', 'editor.Editor', 'editor', 'viewer.Viewer', 'viewer', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser']
*/
