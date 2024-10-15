let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//For binary search array should be in sorted form
function binarySearch(number, item) {
    let beg = 0;
    let ending = number.length - 1;
    let location = -1;
    
    while (beg <= ending) {
        let mid = Math.floor((beg + ending) / 2);
        if (number[mid] == item) {
            location = mid;
            break;
        }
        else if (number[mid] < item) {
            beg = mid + 1
        }
        else {
            ending = mid - 1;
        }
    }
    return location;


}
let result = binarySearch(number, 2);

if (result !== -1) {
    console.log(`item is found at ${result}`);
}
else {
    console.log("item not fount");

}