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

findNemo(nemo); // O(n) - linear time

const boxes = [0, 1, 2, 3, 4, 5, 6];


// O(1) - constant time
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0])
    console.log(boxes[1])
};

logFirstTwoBoxes(boxes);