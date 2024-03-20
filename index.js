const nemo = ["nemo", "dory", "bruce", "marling", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(1000).fill("nemo");
function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("we found nemo!")
        };
    };
    let t1 = performance.now();
    console.log("call to find nemo took " + (t1 - t0) + " milliseconds")
};

findNemo(large);