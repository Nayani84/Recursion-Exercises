/** product: calculate the product of an array of numbers. */

const { string } = require("yargs");

function product(nums) {
    if (nums.length === 0) return 1;

    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
    if (words.length === 0) {
        return 0;
    }

    const firstWordLength = words[0].length;
    const otherLongest = longest(words.slice(1));

    return Math.max(firstWordLength, otherLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
    if (str.length === 0) {
        return "";
    }

    return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if (str.length === 1 || str.length === 0) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }
    return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
    if (idx >= arr.length) {
        return -1;
    }
    if (arr[idx] === val) {
        return idx;
    }
    return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    if (str.length === 0) {
        return "";
    }
    return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let result = [];

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            result.push(obj[key]);
        }
        else if (typeof obj[key] === "object") {
            result.push(...gatherStrings(obj[key]));
        }
    }
    return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
        return middle;
    }
    if (arr[middle] > val) {
        return binarySearch(arr, val, left, middle - 1);
    }
    else {
        return binarySearch(arr, val, middle + 1, right)
    }
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch
};
