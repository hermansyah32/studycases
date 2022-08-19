const selectionSort = (arrayList, asc = true) => {
  let chosenIndex = 0;
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[j] < arrayList[chosenIndex] && asc) {
        chosenIndex = j;
      }
      if (arrayList[j] > arrayList[chosenIndex] && !asc) {
        chosenIndex = j;
      }
    }
    const temp = arrayList[i];
    arrayList[i] = arrayList[chosenIndex];
    arrayList[chosenIndex] = temp;
  }
  return arrayList;
};

const assertAsc = [1, 2, 3, 4, 5, 5];
// const assertDesc = [5, 5, 4, 3, 2, 1];
const random = [3, 5, 2, 1, 5, 4];
const resultAsc = selectionSort([].concat(random));
// const resultDes = selectionSort(random, false);
console.log(`randomElement: ${random}`);
console.log(`resultElement: ${resultAsc}`);
console.log(`Sorting result: ${assertAsc.toString() === resultAsc.toString()}`);
