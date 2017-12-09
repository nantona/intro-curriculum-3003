'use strict';

const memoArray = [];
memoArray.push(0);
memoArray.push(0);
memoArray.push(1);

function trib(n) {
    if (n < memoArray.length) {
        return memoArray[n];
    }
    const value = memoArray[n-1] + memoArray[n-2] + memoArray[n-3];
    memoArray.push(value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
