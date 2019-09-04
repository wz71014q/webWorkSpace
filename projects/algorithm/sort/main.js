import './index.html';

// 冒泡排序
function bubbleSort(arr) {
  let middle;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        middle = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = middle;
      }
    }
  }
  return arr;
}

const testArray = [3, 5, 1, 2, 7, 4, 1, 5, 8, -1];
// console.log(bubbleSort(testArray));

// 选择排序
function selectSort(arr) {
  let temp;
  let minItemIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    minItemIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minItemIndex]) {
        temp = arr[minItemIndex];
        arr[minItemIndex] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log(selectSort(testArray));

// 插入法
function insertSort(arr) {
  let preIndex;
  let current;
  let temp;
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

// console.log(insertSort(testArray));

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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftCacheArray.push(arr[i]);
    } else if (arr[i] === pivot) {
      middleCacheArray.push(arr[i]);
    } else {
      rightCacheArray.push(arr[i]);
    }
  }
  result = quickSort(leftCacheArray).concat(
    middleCacheArray,
    quickSort(rightCacheArray),
  );
  return result;
}
// console.log(quickSort(testArray));
