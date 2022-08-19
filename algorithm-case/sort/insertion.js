const insertionSort = (arrayList, asc = true) => {
  for (let i = 1; i < arrayList.length; i++) {
    let currentValue = arrayList[i];
    let checkedIndex = i - 1;
    while (checkedIndex >= 0) {
      if (currentValue < arrayList[checkedIndex] && asc) {
        arrayList[checkedIndex + 1] = arrayList[checkedIndex];
        arrayList[checkedIndex] = currentValue;
      } else if (currentValue > arrayList[checkedIndex] && asc) {
        break;
      }

      if (currentValue > arrayList[checkedIndex] && !asc) {
        arrayList[checkedIndex + 1] = arrayList[checkedIndex];
        arrayList[checkedIndex] = currentValue;
      } else if (currentValue < arrayList[checkedIndex] && !asc) {
        break;
      }
      checkedIndex--;
    }
  }
  return arrayList;
};

const assertAsc = [1, 2, 3, 4, 5, 5];
// const assertDesc = [5, 5, 4, 3, 2, 1];
const random = [3, 5, 2, 1, 5, 4];
const resultAsc = insertionSort([].concat(random));
// const resultDes = insertionSort(random, false);
console.log(`randomElement: ${random}`);
console.log(`resultElement: ${resultAsc}`);
console.log(`Sorting result: ${assertAsc.toString() === resultAsc.toString()}`);
