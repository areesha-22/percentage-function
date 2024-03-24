"use strict";
//function
function result(num) {
    if (num >= 90) {
        console.log("A1");
    }
    else if (num >= 80) {
        console.log("A");
    }
    else if (num >= 70) {
        console.log("B");
    }
    else {
        console.log("fail");
    }
    return (num);
}
result(60);
