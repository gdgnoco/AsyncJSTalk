var exampleIterable = {};
var val = 0;
exampleIterable[Symbol.iterator] = function* () {
	while(true) {
		yield (++val)*2;
	}
};
var iter = exampleIterable[Symbol.iterator]();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

