let array = [13, 2, 3, 53, 5, 3, 53, 3, 45];

function sortArr(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;
        for (j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return array;
}

console.log(sortArr(array))