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

function mergeSort(a, b) {

}

module.exports = { merge, mergeSort};