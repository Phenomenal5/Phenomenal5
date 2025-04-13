function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElemt = arr[i]; 
        let elemBeforeCurrentElemt = i - 1;

        while(elemBeforeCurrentElemt >=0 && arr[elemBeforeCurrentElemt] > currentElemt) {
            arr[elemBeforeCurrentElemt + 1] = arr[elemBeforeCurrentElemt];
            elemBeforeCurrentElemt--;
        }
        arr[elemBeforeCurrentElemt + 1] = currentElemt;
    }
    return arr;
}
