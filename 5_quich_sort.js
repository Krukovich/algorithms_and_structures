const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,9,-1,-5,23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1,-5,23,9,4,2,1,2,9,6,4,1,7,-1,-5,23,]
let count = 0

const quickSort = (array) => {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

// Быстрая сортировка + уникальность
const secondQuickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const midPoint = arr[Math.floor(arr.length / 2)]
    const leftPart = arr.filter((item) => item < midPoint)
    const rightPart = arr.filter((item) => item > midPoint)
    return [...secondQuickSort(leftPart), midPoint, ...secondQuickSort(rightPart)]
}

console.log(secondQuickSort(arr))
console.log(quickSort(arr))
console.log('count', count)
