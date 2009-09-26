/* start module: viewer */
var viewer = $pyjs.loaded_modules["viewer"] = function (__mod_name__) {
if(viewer.__was_initialized__) return viewer;
viewer.__was_initialized__ = true;
if (__mod_name__ == null) __mod_name__ = 'viewer';
var __name__ = viewer.__name__ = __mod_name__;
pyjslib.__import__(['pyjd'], 'pyjd', 'viewer');
viewer.pyjd = $pyjs.__modules__.pyjd;
pyjslib.__import__(['pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel'], 'pyjamas.ui.RootPanel.RootPanel', 'viewer');
viewer.RootPanel = $pyjs.__modules__.pyjamas.ui.RootPanel.RootPanel;
pyjslib.__import__(['pyjamas.ui.Button.Button', 'pyjamas.ui.Button'], 'pyjamas.ui.Button.Button', 'viewer');
viewer.Button = $pyjs.__modules__.pyjamas.ui.Button.Button;
pyjslib.__import__(['pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid'], 'pyjamas.ui.Grid.Grid', 'viewer');
viewer.Grid = $pyjs.__modules__.pyjamas.ui.Grid.Grid;
pyjslib.__import__(['pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest'], 'pyjamas.HTTPRequest.HTTPRequest', 'viewer');
viewer.HTTPRequest = $pyjs.__modules__.pyjamas.HTTPRequest.HTTPRequest;
pyjslib.__import__(['pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser'], 'pyjamas.JSONParser.JSONParser', 'viewer');
viewer.JSONParser = $pyjs.__modules__.pyjamas.JSONParser.JSONParser;
pyjslib.__import__(['pyjamas.Window', 'pyjamas'], 'pyjamas.Window', 'viewer');
viewer.Window = $pyjs.__modules__.pyjamas.Window;
viewer.ViewLoader = (function(){
	var cls_instance = pyjs__class_instance('ViewLoader');
	var cls_definition = new Object();
	cls_definition.__md5__ = '668b6ea55d9fcbfaff694190b915e991';
	cls_definition.__init__ = pyjs__bind_method(cls_instance, '__init__', function(viewer) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			viewer = arguments[1];
		}

		pyjslib.printFunc([String('loader init')], 1);
		self.viewer = viewer;
		return null;
	}
	, 1, [null,null,'self', 'viewer']);
	cls_definition.onCompletion = pyjs__bind_method(cls_instance, 'onCompletion', function(body) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			body = arguments[1];
		}

		pyjslib.printFunc([String('complete')], 1);
		self.viewer.populate(body);
		return null;
	}
	, 1, [null,null,'self', 'body']);
	cls_definition.onError = pyjs__bind_method(cls_instance, 'onError', function(text) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			text = arguments[1];
		}

		viewer.Window.alert(text);
		return null;
	}
	, 1, [null,null,'self', 'text']);
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
viewer.DeleteHandler = (function(){
	var cls_instance = pyjs__class_instance('DeleteHandler');
	var cls_definition = new Object();
	cls_definition.__md5__ = 'b2e453d2c8c66d8f498b1a06b25b2486';
	cls_definition.__init__ = pyjs__bind_method(cls_instance, '__init__', function(viewer) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			viewer = arguments[1];
		}

		pyjslib.printFunc([String('init')], 1);
		self.viewer = viewer;
		return null;
	}
	, 1, [null,null,'self', 'viewer']);
	cls_definition.onCompletion = pyjs__bind_method(cls_instance, 'onCompletion', function(body) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			body = arguments[1];
		}

		pyjslib.printFunc([String('comp')], 1);
		viewer.Window.alert(String('Deleted!'));
		return null;
	}
	, 1, [null,null,'self', 'body']);
	cls_definition.onError = pyjs__bind_method(cls_instance, 'onError', function(body) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			body = arguments[1];
		}

		pyjslib.printFunc([String('err')], 1);
		viewer.Window.alert(body);
		return null;
	}
	, 1, [null,null,'self', 'body']);
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
viewer.Viewer = (function(){
	var cls_instance = pyjs__class_instance('Viewer');
	var cls_definition = new Object();
	cls_definition.__md5__ = '0f3abb36d15c3a5aaf6fffbc92680154';
	cls_definition.__init__ = pyjs__bind_method(cls_instance, '__init__', function(db_url, parent_panel, doc_callback) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			db_url = arguments[1];
			parent_panel = arguments[2];
			doc_callback = arguments[3];
		}

		self.db_url = db_url;
		self.parent_panel = parent_panel;
		self.doc_callback = doc_callback;
		return null;
	}
	, 1, [null,null,'self', 'db_url', 'parent_panel', 'doc_callback']);
	cls_definition.onModuleLoad = pyjs__bind_method(cls_instance, 'onModuleLoad', function() {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
		}

		self.grid = viewer.Grid();
		self.grid.resize(1, 3);
		self.grid.setBorderWidth(1);
		self.grid.setHTML(0, 0, String('ID'));
		self.grid.setHTML(0, 1, String('Revision'));
		self.grid.setHTML(0, 2, String('Delete'));
		self.grid.addTableListener(self);
		self.parent_panel.add((typeof self.grid == 'function' && self.__is_instance__?pyjslib.getattr(self, 'grid'):self.grid));
		return null;
	}
	, 1, [null,null,'self']);
	cls_definition.populate = pyjs__bind_method(cls_instance, 'populate', function(json) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			json = arguments[1];
		}
		var row_num,data,view_obj;
		view_obj = viewer.JSONParser().decode(json);
		data = view_obj.__getitem__(String('rows'));
		self.grid.resize( ( pyjslib.len(data) + 1 ) , 3);
		var __row_num = pyjslib.range(pyjslib.len(data)).__iter__();
		try {
			while (true) {
				var row_num = __row_num.next();
				
				self.grid.setHTML( ( row_num + 1 ) , 0, data.__getitem__(row_num).__getitem__(String('key')));
				self.grid.setHTML( ( row_num + 1 ) , 1, data.__getitem__(row_num).__getitem__(String('value')).__getitem__(String('rev')));
				self.grid.setHTML( ( row_num + 1 ) , 2, String('\x3Cb\x3EX O X\x3C/b\x3E'));
			}
		} catch (e) {
			if (e.__name__ != 'StopIteration') {
				throw e;
			}
		}
		return null;
	}
	, 1, [null,null,'self', 'json']);
	cls_definition.onCellClicked = pyjs__bind_method(cls_instance, 'onCellClicked', function(sender, row, col) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			sender = arguments[1];
			row = arguments[2];
			col = arguments[3];
		}
		var url,doc_rev,doc_id;
		doc_id = self.grid.getHTML(row, 0);
		if (pyjslib.bool(pyjslib.eq(col, 2))) {
			doc_rev = self.grid.getHTML(row, 1);
			url =  (  (  ( (typeof self.db_url == 'function' && self.__is_instance__?pyjslib.getattr(self, 'db_url'):self.db_url) + doc_id )  + String('?rev=') )  + doc_rev ) ;
			pyjs_kwargs_call(viewer.HTTPRequest(), 'asyncDelete', null, null, [{url:url, handler:viewer.DeleteHandler(self)}, null, null]);
		}
		else {
			self.doc_callback(doc_id);
		}
		return null;
	}
	, 1, [null,null,'self', 'sender', 'row', 'col']);
	cls_definition.loadView = pyjs__bind_method(cls_instance, 'loadView', function(view_url) {
		if (this.__is_instance__ === true) {
			var self = this;
		} else {
			var self = arguments[0];
			view_url = arguments[1];
		}

		pyjs_kwargs_call(viewer.HTTPRequest(), 'asyncGet', null, null, [{url: ( (typeof self.db_url == 'function' && self.__is_instance__?pyjslib.getattr(self, 'db_url'):self.db_url) + view_url ) , handler:viewer.ViewLoader(self)}, null, null]);
		return null;
	}
	, 1, [null,null,'self', 'view_url']);
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
if (pyjslib.bool(pyjslib.eq(viewer.__name__, String('__main__')))) {
	viewer.pyjd.setup(String('public/viewer.html?fred=foo#me'));
	viewer.db_url = String('http://localhost:5984/relaxer/');
	viewer.view_url = String('_all_docs');
	viewer.viewer = viewer.Viewer(viewer.db_url, viewer.RootPanel(), (typeof viewer.Window.alert == 'function' && viewer.Window.__is_instance__?pyjslib.getattr(viewer.Window, 'alert'):viewer.Window.alert));
	viewer.viewer.onModuleLoad();
	viewer.viewer.loadView(viewer.view_url);
	viewer.pyjd.run();
}
return this;
}; /* end viewer */
$pyjs.modules_hash['viewer'] = $pyjs.loaded_modules['viewer'];


 /* end module: viewer */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser', 'pyjamas.Window']
*/
