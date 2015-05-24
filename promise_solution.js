function msleep(msecs) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        // No failure possible, so we are not using reject
            resolve();
        }, msecs);
    });
}

function count_down() {
    msleep(1000).then(function(){
      console.log("one");
      return msleep(1000)
    }).then(function(){
      console.log("dos");
      return msleep(1000)
    }).then(function(){
      console.log("trois");
      return msleep(1000)
    }).then(function(){
      console.log("vier");
      return msleep(1000)
    }).then(function(){
      console.log("bost");
      return msleep(1000)
    }).then(function(){
      console.log("Do something");
    });
}

count_down();
