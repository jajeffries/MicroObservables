window.observable = function (o) {
	var h = {};

	o.on = function (e, fn) {
		if(typeof fn !== "function") return;
		if(!h[e]) h[e] = []; 
		h[e].push(fn);
		return o;
	};

	o.off = function (es) {
		es = es.split(/\s+/);
		for (var i = 0; i < es.length; i++) {
	      delete h[es[i]];
	    }
		return o;
	}

	o.trigger = function (e) { 
		var args = Array.prototype.slice.call(arguments, 1);
			fns = h[e] || [];
		for (var i = 0; i < fns.length; i++) {
			fns[i].apply(fns[i], args);
		}
		return o;
	}

	return o;
};

if (typeof window.define === "function" && window.define.amd) {
  window.define("micorObservables", [], function() {
    return window.observable;
  });
}