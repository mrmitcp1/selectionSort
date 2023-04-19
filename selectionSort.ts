function selectionSort(arr:number[]) {
    for (let i = 0; i < arr.length-1; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<arr[min]){
                min = j
            }
        }if (min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }return arr
}
let arr=[9,3,6,89,34,2,5,52,834];
console.log(selectionSort(arr))