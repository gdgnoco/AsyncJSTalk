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

function msleep(msecs) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        // No failure possible, so we are not using reject
            resolve();
        }, msecs);
    });
}

async(function* () {
  yield msleep(1000);
  console.log("one");
  yield msleep(1000);
  console.log("dos");
  yield msleep(1000);
  console.log("trois");
  yield msleep(1000);
  console.log("vier");
  yield msleep(1000);
  console.log("bost");
  yield msleep(1000);
  console.log("Do something");
});

