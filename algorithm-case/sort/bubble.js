const bubbleSort = (arrayList, asc = true) => {
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = 0; j < arrayList.length - i - 1; j++) {
      if (arrayList[j] > arrayList[j + 1] && asc) {
        const temp = arrayList[j];
        arrayList[j] = arrayList[j + 1];
        arrayList[j + 1] = temp;
      }

      if (arrayList[j] < arrayList[j + 1] && !asc) {
        const temp = arrayList[i];
        arrayList[j] = arrayList[j + 1];
        arrayList[j + 1] = temp;
      }
      console.log(`process i=${i} j=${j}: ${arrayList}`);
    }
  }
  return arrayList;
};

const assertAsc = [1, 2, 3, 4, 5, 5];
// const assertDesc = [5, 5, 4, 3, 2, 1];
const random = [3, 5, 2, 1, 5, 4];
const resultAsc = bubbleSort([].concat(random));
// const resultDes = bubbleSort(random, false);
console.log(`randomElement: ${random}`);
console.log(`resultElement: ${resultAsc}`);
console.log(`Sorting result: ${assertAsc.toString() === resultAsc.toString()}`);
