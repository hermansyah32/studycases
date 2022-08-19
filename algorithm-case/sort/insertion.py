def insertionSort(arrayList, asc=True):
    for i in range(1, len(arrayList)):
        currentValue = arrayList[i]
        checkedIndex = i - 1
        while(checkedIndex >= 0):
            if (currentValue < arrayList[checkedIndex] and asc):
                arrayList[checkedIndex + 1] = arrayList[checkedIndex]
                arrayList[checkedIndex] = currentValue
            elif (currentValue > arrayList[checkedIndex] and asc):
                break

            if (currentValue > arrayList[checkedIndex] and not asc):
                arrayList[checkedIndex + 1] = arrayList[checkedIndex]
                arrayList[checkedIndex] = currentValue
            elif (currentValue < arrayList[checkedIndex] and not asc):
                break
            checkedIndex -= 1
    return arrayList


assertAsc = [1, 2, 3, 4, 5, 5]
# assertDes = [5, 5, 4, 3, 2, 1]
random = [3, 5, 2, 1, 5, 4]
resultAsc = insertionSort(random.copy())
# resultDes = bubbleSort(random.copy(), False)
print('randomElement: ', random)
print('resultElement: ', resultAsc)
print('Sorting result: ', assertAsc == resultAsc)
