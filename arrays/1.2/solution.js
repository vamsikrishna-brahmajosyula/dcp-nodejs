// Find the minimum window to be sorted

// [ 3, 7, 5, 6, 9]

// 1, 3


let left = -1;

let right = -1;

let input = [3, 7, 5, 6, 9]

let n = input.length;

let minSeen = Number.MAX_VALUE;

let maxSeen = Number.MIN_VALUE;


for (var i = 0; i < n; i++) {
    maxSeen = Math.max(maxSeen, input[i]);
    if (input[i] < maxSeen) {
        right = i;
    }
}


for (var i = n-1; i >= 0; i--) {
    minSeen = Math.min(minSeen, input[i]);
    if (input[i] > minSeen) {
        left = i;
    }
}


console.log([left, right]);