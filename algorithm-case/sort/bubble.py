def bubbleSort(arrayList, asc=True):
    for i in range(0, len(arrayList)):
        for j in range(0, len(arrayList) - i - 1):
            if (arrayList[j] > arrayList[j+1] and asc):
                temp = arrayList[j]
                arrayList[j] = arrayList[j+1]
                arrayList[j+1] = temp
            if (arrayList[j] < arrayList[j+1] and not asc):
                temp = arrayList[j]
                arrayList[j] = arrayList[j+1]
                arrayList[j+1] = temp
    return arrayList


assertAsc = [1, 2, 3, 4, 5, 5]
# assertDes = [5, 5, 4, 3, 2, 1]
random = [3, 5, 2, 1, 5, 4]
resultAsc = bubbleSort(random.copy())
# resultDes = bubbleSort(random.copy(), False)
print('randomElement: ', random)
print('resultElement: ', resultAsc)
print('Sorting result: ', assertAsc == resultAsc)
