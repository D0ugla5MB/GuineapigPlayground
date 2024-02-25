export function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

export function getRandomBool() {
    return Math.random() > 0.5 ? true : false;
}

export function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}
