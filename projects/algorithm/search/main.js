import './index.html';

const testArray = [3, 5, 1, 2, 7, 4, 1, 5, 8, -1];
// 快速排序：选取一个基本数据，比它小的全部放左边，比它大的全部放右边
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let result;
  let pivot = arr[0];
  let leftCacheArray = [];
  let middleCacheArray = [];
  let rightCacheArray = [];
  for( let i = 0; i < arr.length; i ++) {
    if (arr[i] < pivot) {
      leftCacheArray.push(arr[i]);
    } else if (arr[i] === pivot) {
      middleCacheArray.push(arr[i]);
    } else {
      rightCacheArray.push(arr[i]);
    }
  }
  result = quickSort(leftCacheArray).concat(middleCacheArray, quickSort(rightCacheArray));
  return result;
}

// 二分法查找，二分法必须先对数组进行排序
function search(array, target, start, end) {
  let result;
  let _start = start || 0;
  let _end = end || array.length - 1;
  let middle = parseInt(_start + (_end - _start) / 2);
  if (array[middle] === target) {
    result = middle;
  } else if (target < array[middle]) {
    result = search(array, target, _start, middle - 1);
  } else if (target > array[middle]) {
    result = search(array, target, middle + 1, _end);
  } else {
    result = false;
  }
  return result;
}
const targetArray = quickSort(testArray);
console.log(targetArray);
console.log(search(targetArray, 3));