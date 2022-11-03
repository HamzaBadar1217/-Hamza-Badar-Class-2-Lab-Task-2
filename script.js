let arr = [1, 2, 3, 4, 5];

// 1) push element 6
let arr1 = [...arr];
arr1.push(6);
console.log('push element 6: ', arr1);

// 2) pop last element
let arr2 = [...arr];
arr2.pop();
console.log('pop last element: ', arr2);

// 3) reverse the given array
let arr3 = [...arr];
arr3.reverse();
console.log('reverse the given array: ', arr3);

// 4) slice the given array
let arr4 = [...arr];
let slicedArray = arr4.slice(1, 4);
console.log('slice the given array: ', slicedArray);

// 5) Fill the Array with 6's
let arr5 = [...arr];
arr5.fill(6);
console.log("Fill the Array with 6's: ", arr5);

// 6) Concatenation With Array
let arr6 = [...arr];
let arr7 = [6, 7, 8];
let arr8 = arr6.concat(arr7)
console.log("Concatenation With Array: ", arr8);