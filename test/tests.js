(function () {

	function MyObject () {
		observable(this);
	};

	test("added callback should be called when triggered", function () {
		var obj = new MyObject();

		var called = false;
		obj.on("event", function () {
			called = true;
		});
		obj.trigger("event");
		ok(called, "Callback called");
	});

	test("added callback should be called with argument when triggered with argument", function () {
		var obj = new MyObject();
		obj.on("event", function (spy) {
			spy.called += 1;
		});
		var spy = { called: 0 };
		obj.trigger("event", spy);
		ok(spy.called == 1, "Callback called with argument");
	});

	test("multiple added callbacks should be called when triggered", function () {
		var obj = new MyObject();
		var called = 0;
		obj.on("event", function () {
			called += 1;
		})
		.on("event", function () {
			called += 1;
		});
		obj.trigger("event");
		ok(called == 2, "Callback called with argument");
	});

	test("multiple added callbacks should be called when triggered", function () {
		var obj = new MyObject();
		var called = 0;
		obj.on("event", function () {
			called += 1;
		})
		.on("event", function () {
			called += 1;
		});
		obj.trigger("event");
		ok(called == 2, "Multiple callbacks called");
	});

	test("callback should not be called when turned off", function () {
		var obj = new MyObject();
		var called = 0;
		obj.on("event", function () {
			called += 1;
		});
		obj.off("event");
		obj.trigger("event");
		ok(called == 0, "No callbacks called");
	});

})();