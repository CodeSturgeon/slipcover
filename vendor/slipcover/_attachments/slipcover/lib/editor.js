/* start module: editor */
var editor = $pyjs.loaded_modules["editor"] = function (__mod_name__) {
if(editor.__was_initialized__) return editor;
editor.__was_initialized__ = true;
if (__mod_name__ == null) __mod_name__ = 'editor';
var __name__ = editor.__name__ = __mod_name__;
pyjslib.__import__(['pyjd'], 'pyjd', 'editor');
editor.pyjd = $pyjs.__modules__.pyjd;
pyjslib.__import__(['pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel'], 'pyjamas.ui.RootPanel.RootPanel', 'editor');
editor.RootPanel = $pyjs.__modules__.pyjamas.ui.RootPanel.RootPanel;
pyjslib.__import__(['pyjamas.ui.Button.Button', 'pyjamas.ui.Button'], 'pyjamas.ui.Button.Button', 'editor');
editor.Button = $pyjs.__modules__.pyjamas.ui.Button.Button;
pyjslib.__import__(['pyjamas.ui.Label.Label', 'pyjamas.ui.Label'], 'pyjamas.ui.Label.Label', 'editor');
editor.Label = $pyjs.__modules__.pyjamas.ui.Label.Label;
pyjslib.__import__(['pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea'], 'pyjamas.ui.TextArea.TextArea', 'editor');
editor.TextArea = $pyjs.__modules__.pyjamas.ui.TextArea.TextArea;
pyjslib.__import__(['pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel'], 'pyjamas.ui.VerticalPanel.VerticalPanel', 'editor');
editor.VerticalPanel = $pyjs.__modules__.pyjamas.ui.VerticalPanel.VerticalPanel;
pyjslib.__import__(['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel'], 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'editor');
editor.HorizontalPanel = $pyjs.__modules__.pyjamas.ui.HorizontalPanel.HorizontalPanel;
pyjslib.__import__(['pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest'], 'pyjamas.HTTPRequest.HTTPRequest', 'editor');
editor.HTTPRequest = $pyjs.__modules__.pyjamas.HTTPRequest.HTTPRequest;
pyjslib.__import__(['pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser'], 'pyjamas.JSONParser.JSONParser', 'editor');
editor.JSONParser = $pyjs.__modules__.pyjamas.JSONParser.JSONParser;
pyjslib.__import__(['pyjamas.Window', 'pyjamas'], 'pyjamas.Window', 'editor');
editor.Window = $pyjs.__modules__.pyjamas.Window;
editor.DocLoader = (function(){
	var cls_instance = pyjs__class_instance('DocLoader');
	var cls_definition = new Object();
	cls_definition.__md5__ = '18062ba960ded7efcbed9571cc8086f8';
	cls_definition.__init__ = pyjs__bind_method(cls_instance, '__init__', function(editor) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			editor = arguments[1];
		}

		self.editor = editor;
		return null;
	}
	, 1, [null,null,'self', 'editor']);
	cls_definition.onCompletion = pyjs__bind_method(cls_instance, 'onCompletion', function(text) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			text = arguments[1];
		}

		self.editor.updateDoc(text);
		return null;
	}
	, 1, [null,null,'self', 'text']);
	cls_definition.onError = pyjs__bind_method(cls_instance, 'onError', function(text) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			text = arguments[1];
		}

		editor.Window.alert(text);
		return null;
	}
	, 1, [null,null,'self', 'text']);
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
editor.DocSaver = (function(){
	var cls_instance = pyjs__class_instance('DocSaver');
	var cls_definition = new Object();
	cls_definition.__md5__ = '531b1add8da785a28933df8d6fe2dc27';
	cls_definition.__init__ = pyjs__bind_method(cls_instance, '__init__', function(editor) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			editor = arguments[1];
		}

		self.editor = editor;
		return null;
	}
	, 1, [null,null,'self', 'editor']);
	cls_definition.onCompletion = pyjs__bind_method(cls_instance, 'onCompletion', function(text) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			text = arguments[1];
		}

 		return null;
	}
	, 1, [null,null,'self', 'text']);
	cls_definition.onError = pyjs__bind_method(cls_instance, 'onError', function(text) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			text = arguments[1];
		}
		var obj;
		obj = editor.JSONParser().decode(text);
		if (pyjslib.bool(!(obj.__getitem__(String('ok'))))) {
			editor.Window.alert(text);
		}
		else {
			self.editor.reloadDocument();
		}
		return null;
	}
	, 1, [null,null,'self', 'text']);
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
editor.Editor = (function(){
	var cls_instance = pyjs__class_instance('Editor');
	var cls_definition = new Object();
	cls_definition.__md5__ = '291ab19a07985c0e0deead7a268e087f';
	cls_definition.__init__ = pyjs__bind_method(cls_instance, '__init__', function(db_url, parent_panel) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			db_url = arguments[1];
			parent_panel = arguments[2];
		}

		self.db_url = db_url;
		self.doc_id = null;
		self.parent_panel = parent_panel;
		return null;
	}
	, 1, [null,null,'self', 'db_url', 'parent_panel']);
	cls_definition.loadDocument = pyjs__bind_method(cls_instance, 'loadDocument', function(doc_id) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			doc_id = arguments[1];
		}

		pyjs_kwargs_call(editor.HTTPRequest(), 'asyncGet', null, null, [{url: ( (typeof self.db_url == 'function' && self.__is_instance__?pyjslib.getattr(self, 'db_url'):self.db_url) + doc_id ) , handler:editor.DocLoader(self)}, null, null]);
		return null;
	}
	, 1, [null,null,'self', 'doc_id']);
	cls_definition.reloadDocument = pyjs__bind_method(cls_instance, 'reloadDocument', function() {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
		}

		if (pyjslib.bool(((typeof self.doc_id == 'function' && self.__is_instance__?pyjslib.getattr(self, 'doc_id'):self.doc_id) === null))) {
			editor.Window.Alert(String('Trying to reload blank doc'));
		}
		else {
			self.loadDocument((typeof self.doc_id == 'function' && self.__is_instance__?pyjslib.getattr(self, 'doc_id'):self.doc_id));
		}
		return null;
	}
	, 1, [null,null,'self']);
	cls_definition.updateDoc = pyjs__bind_method(cls_instance, 'updateDoc', function(json) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			json = arguments[1];
		}
		var doc_obj;
		doc_obj = editor.JSONParser().decode(json);
		self.doc_id = doc_obj.__getitem__(String('_id'));
		self.id_label.setText(pyjslib.sprintf(String('ID : %s'), doc_obj.__getitem__(String('_id'))));
		self.rev_label.setText(pyjslib.sprintf(String('REV: %s'), doc_obj.__getitem__(String('_rev'))));
		self.save_button.setEnabled(true);
		self.doc_area.setText(json);
		self.doc_area.setEnabled(true);
		self.doc_area.setFocus(true);
		return null;
	}
	, 1, [null,null,'self', 'json']);
	cls_definition.testy = pyjs__bind_method(cls_instance, 'testy', function() {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
		}

		pyjs_kwargs_call(editor.Window, 'open', null, null, [{url:String('http://localhost:5984/relaxer'), name:String('noogit')}]);
		return null;
	}
	, 1, [null,null,'self']);
	cls_definition.saveDocument = pyjs__bind_method(cls_instance, 'saveDocument', function() {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
		}

		self.doc_area.setEnabled(false);
		self.save_button.setEnabled(false);
		pyjs_kwargs_call(editor.HTTPRequest(), 'asyncPut', null, null, [{url: ( (typeof self.db_url == 'function' && self.__is_instance__?pyjslib.getattr(self, 'db_url'):self.db_url) + (typeof self.doc_id == 'function' && self.__is_instance__?pyjslib.getattr(self, 'doc_id'):self.doc_id) ) , postData:self.doc_area.getText(), handler:editor.DocSaver(self)}, null, null]);
		return null;
	}
	, 1, [null,null,'self']);
	cls_definition.onModuleLoad = pyjs__bind_method(cls_instance, 'onModuleLoad', function() {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
		}

		self.editor_panel = editor.VerticalPanel();
		self.id_label = editor.Label(String('ID: '));
		self.editor_panel.add((typeof self.id_label == 'function' && self.__is_instance__?pyjslib.getattr(self, 'id_label'):self.id_label));
		self.rev_label = editor.Label(String('REV: '));
		self.editor_panel.add((typeof self.rev_label == 'function' && self.__is_instance__?pyjslib.getattr(self, 'rev_label'):self.rev_label));
		self.doc_area = editor.TextArea();
		self.doc_area.setCharacterWidth(80);
		self.doc_area.setVisibleLines(24);
		self.doc_area.setEnabled(false);
		self.editor_panel.add((typeof self.doc_area == 'function' && self.__is_instance__?pyjslib.getattr(self, 'doc_area'):self.doc_area));
		self.parent_panel.add((typeof self.editor_panel == 'function' && self.__is_instance__?pyjslib.getattr(self, 'editor_panel'):self.editor_panel));
		self.button_panel = editor.HorizontalPanel();
		self.save_button = editor.Button(String('Save'), (typeof self.saveDocument == 'function' && self.__is_instance__?pyjslib.getattr(self, 'saveDocument'):self.saveDocument));
		self.save_button.setEnabled(false);
		self.view_button = editor.Button(String('View'), (typeof self.testy == 'function' && self.__is_instance__?pyjslib.getattr(self, 'testy'):self.testy));
		self.button_panel.add((typeof self.save_button == 'function' && self.__is_instance__?pyjslib.getattr(self, 'save_button'):self.save_button));
		self.button_panel.add((typeof self.view_button == 'function' && self.__is_instance__?pyjslib.getattr(self, 'view_button'):self.view_button));
		self.parent_panel.add((typeof self.button_panel == 'function' && self.__is_instance__?pyjslib.getattr(self, 'button_panel'):self.button_panel));
		return null;
	}
	, 1, [null,null,'self']);
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
if (pyjslib.bool(pyjslib.eq(editor.__name__, String('__main__')))) {
	editor.pyjd.setup(String('public/editor.html?fred=foo#me'));
	editor.db_url = String('http://localhost:5984/relaxer/');
	editor.doc_id = String('002aee2de7875f1145f6cf8b5e2e1290');
	editor.vsp = editor.VerticalPanel();
	editor.RootPanel().add(editor.vsp);
	editor.editor = editor.Editor(editor.db_url, editor.vsp);
	editor.editor.onModuleLoad();
	editor.editor.loadDocument(editor.doc_id);
	editor.pyjd.run();
}
return this;
}; /* end editor */
$pyjs.modules_hash['editor'] = $pyjs.loaded_modules['editor'];


 /* end module: editor */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser', 'pyjamas.Window']
*/
