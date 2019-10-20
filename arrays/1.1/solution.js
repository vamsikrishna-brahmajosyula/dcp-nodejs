// input [ 1, 2, 3, 4 ,5]

// output [120, 60, 40, 30, 24]


let input = [ 1, 2, 3, 4, 5];

let products = (input) => {

    let forwardProducts = [];

    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            forwardProducts[i] = input[i];
        } else {
            forwardProducts[i] = forwardProducts[i - 1] * input[i];
        }
    }


    let reverseProducts = [];

    let n = input.length;
    for (let i = n - 1; i >= 0; i--) {
        if (i == n - 1) {
            reverseProducts[i] = input[i];
        } else {
            reverseProducts[i] = reverseProducts[i + 1] * input[i];
        }
    }


    let output = [];

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            output[i] = reverseProducts[i+1];
        } else if (i == n - 1) {
            output[i] = forwardProducts[i-1];
        } else {
            output[i] = reverseProducts[i+1] * forwardProducts[i-1];
        }
    }

    return output;
}

let output = products(input);

console.log(output);
