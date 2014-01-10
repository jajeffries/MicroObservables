function observable(obj) {
	var h = {};

	obj.on = function (e, fn) {
		if(typeof fn !== "Function") return;
		if(!h[e]) h[e] = []; 
		h[e].push(fn);
		return obj;
	};

	obj.off = function (es) {
		es = es.split(/\s+/);
		for (var i = 0; i < es.length; i++) {
	      delete h[es[i]];
	    }
		return obj;
	}

	obj.trigger = function (e) { 
		var args = arguments.slice(1),
			fns = h[e] || [];
		for (var i = 0; i < fns.length; i++) {
			fns[i](args);
		}
		return obj;
	}

	return obj;
}