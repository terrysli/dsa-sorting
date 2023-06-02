// Helper fn to merge 2 sorted arrays
function merge(a, b) {
  let pointerA = 0;
  let pointerB = 0;
  let out = [];

  // Compare between elements in a and b until get to end of either array.
  while(pointerA < a.length && pointerB < b.length) {
    if (a[pointerA] <= b[pointerB]) {
      out.push(a[pointerA]);
      pointerA++;
    }
    else {
      out.push(b[pointerB]);
      pointerB++;
    }
  }

  // Once we reach end of one array, merge with rest of other array.
  if (pointerA >= a.length) {
    out = out.concat(b.slice(pointerB));
  }
  else {
    out = out.concat(a.slice(pointerA));
  }
  return out;
}

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  //split the arrays in half until they have a length of 0 or 1
  let a = arr.slice(0, Math.floor(arr.length / 2));
  let b = arr.slice(Math.floor(arr.length / 2));
  //merge them back together
  let sortedA = mergeSort(a);
  let sortedB = mergeSort(b);

  return merge(sortedA, sortedB);
}

module.exports = { merge, mergeSort};