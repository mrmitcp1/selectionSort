function selectionSort(arr:number[]) {
    for (let i = 0; i < arr.length-1; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }return arr
}
let arr=[1,4,6,81,3,23,65];
console.log(selectionSort(arr))
