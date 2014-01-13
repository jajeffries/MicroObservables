Micro Observables
=================

Tiny simple observables heavily based on riot.js observables and jQuery/Zepto events, but without any dependencies.

Installation
------------
Just copy the microObservables.js file into your project.

Usage
-----

Just call `observable` passing any POJO that you want to be able to observe.

	function MyObject () {
		observable(this);
	};

Then add handlers to an instance of you POJO.

	var x = new MyObject();
	x.on("yourEventName", function () {
		// Do something
	});

and trigger an event to call your handler

	x.trigger("yourEventName");

You can also pass arguments to your handlers using triggers

	x.on("anotherEventName", function (x) {
		// Do something
	});

	x.trigger("anotherEventName", 1);

You can remove handlers by event name. for example the code below will remove all the handlers for `"yourEventName"`

	x.off("yourEventName");

And finally all the functions are composable, so you can do things like this

	x.on("event1", function () {
		// do something
	}).on("event2", function () {
		// do something
	});

Running the tests
-----------------
This requires that you have both [npm] and [grunt-cli] installed.

1. Download the latest code
2. Run `npm install`
3. run `grunt test`

	[1]: https://npmjs.org/						"npm"
	[2]: https://github.com/gruntjs/grunt-cli   "grunt-cli"