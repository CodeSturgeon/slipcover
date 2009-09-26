/* start module: pyjamas.ui */
pyjamas.ui = $pyjs.loaded_modules["pyjamas.ui"] = function (__mod_name__) {
if(pyjamas.ui.__was_initialized__) return pyjamas.ui;
pyjamas.ui.__was_initialized__ = true;
if (__mod_name__ == null) __mod_name__ = 'pyjamas.ui';
var __name__ = pyjamas.ui.__name__ = __mod_name__;
var ui = pyjamas.ui;

pyjamas.ui.HasHorizontalAlignment = (function(){
	var cls_instance = pyjs__class_instance('HasHorizontalAlignment');
	var cls_definition = new Object();
	cls_definition.__md5__ = 'd35b553ea553fcb35d0193d7e0166282';
	cls_definition.ALIGN_LEFT = String('left');
	cls_definition.ALIGN_CENTER = String('center');
	cls_definition.ALIGN_RIGHT = String('right');
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
pyjamas.ui.HasVerticalAlignment = (function(){
	var cls_instance = pyjs__class_instance('HasVerticalAlignment');
	var cls_definition = new Object();
	cls_definition.__md5__ = '92fe831c38f9ab416d860cb00012404b';
	cls_definition.ALIGN_TOP = String('top');
	cls_definition.ALIGN_MIDDLE = String('middle');
	cls_definition.ALIGN_BOTTOM = String('bottom');
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
pyjamas.ui.HasAlignment = (function(){
	var cls_instance = pyjs__class_instance('HasAlignment');
	var cls_definition = new Object();
	cls_definition.__md5__ = '9268dfe1f840e2b08b1bc4d37770631c';
	cls_definition.ALIGN_BOTTOM = String('bottom');
	cls_definition.ALIGN_MIDDLE = String('middle');
	cls_definition.ALIGN_TOP = String('top');
	cls_definition.ALIGN_CENTER = String('center');
	cls_definition.ALIGN_LEFT = String('left');
	cls_definition.ALIGN_RIGHT = String('right');
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
pyjamas.ui.Applier = (function(){
	var cls_instance = pyjs__class_instance('Applier');
	var cls_definition = new Object();
	cls_definition.__md5__ = '674d1e88163d7f0df1bb21cbd588aacb';
	cls_definition.__init__ = pyjs__bind_method(cls_instance, '__init__', function() {
		if (this.__is_instance__ === true) {
			var self = this;
			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__is_instance__ !== true || kwargs.__name__ != 'Dict') {
				kwargs = arguments[arguments.length+1];
			}
		} else {
			var self = arguments[0];
			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__is_instance__ !== true || kwargs.__name__ != 'Dict') {
				kwargs = arguments[arguments.length+1];
			}
		}
		if (typeof kwargs == 'undefined') {
			kwargs = pyjslib.Dict({});
			if (typeof self != 'undefined') {
				if (pyjslib.get_pyjs_classtype(self) == 'Dict') {
					kwargs = self;
					self = arguments[1];
				}
			} else {
			}
		}
		var args,prop,fn;
		if (pyjslib.bool(kwargs)) {
			var __prop = kwargs.keys().__iter__();
			try {
				while (true) {
					var prop = __prop.next();
					
					fn = pyjslib.getattr(self, pyjslib.sprintf(String('set%s'), prop), null);
					if (pyjslib.bool(fn)) {
						args = kwargs.__getitem__(prop);
						if (pyjslib.bool(pyjslib.isinstance(args, pyjslib.tuple))) {
							pyjs_kwargs_call(null, fn, args, null, [{}]);
						}
						else {
							fn(args);
						}
					}
				}
			} catch (e) {
				if (e.__name__ != 'StopIteration') {
					throw e;
				}
			}
		}
		return null;
	}
	, 1, [null,'kwargs','self']);
	return pyjs__class_function(cls_instance, cls_definition, 
	                            new Array(pyjslib.object));
})();
return this;
}; /* end pyjamas.ui */
$pyjs.modules_hash['pyjamas.ui'] = $pyjs.loaded_modules['pyjamas.ui'];


 /* end module: pyjamas.ui */


