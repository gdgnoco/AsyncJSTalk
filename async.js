function async(createGenerator) {
	var generator = createGenerator.apply(this, arguments);
	function continuer(verb, arg) {
		var iter;
		try {
			iter = generator[verb](arg);
		} catch (e) {
			return Promise.reject(e);
		}
		if (iter.done) {
			return Promise.resolve(iter.value);
		}
		return Promise.resolve(iter.value).then(callback, errback);
	}
	var callback = continuer.bind(continuer, "next");
	var errback = continuer.bind(continuer, "throw");
	return callback();
}

function* test() {
	console.log('here1');
	yield 1;
	console.log('here2');
	yield 2;
	console.log('here3');
	//yield Promise.reject("My Error Message");
	console.log('here4');
	return "done";
}

/*
for ( x of test()) {
	console.log(x);
}
*/
async(test).then(function(a) {
	console.log('Success: ', a);
}, function(e) {
	console.log('Error: ', e);
});
