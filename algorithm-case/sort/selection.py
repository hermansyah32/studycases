def selectionSort(arrayList, asc=True):
    chosenIndex = 0
    for i in range(0, len(arrayList)):
        for j in range(i+1, len(arrayList)):
            if (arrayList[j] < arrayList[chosenIndex] and asc):
                chosenIndex = j
            if (arrayList[j] > arrayList[chosenIndex] and not asc):
                chosenIndex = j
        temp = arrayList[i]
        arrayList[i] = arrayList[chosenIndex]
        arrayList[chosenIndex] = temp
    return arrayList


assertAsc = [1, 2, 3, 4, 5, 5]
# assertDes = [5, 5, 4, 3, 2, 1]
random = [3, 5, 2, 1, 5, 4]
resultAsc = selectionSort(random.copy())
# resultDes = bubbleSort(random.copy(), False)
print('randomElement: ', random)
print('resultElement: ', resultAsc)
print('Sorting result: ', assertAsc == resultAsc)
