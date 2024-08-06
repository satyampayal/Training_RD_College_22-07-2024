function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
        const sum = a + b;
        if (sum <= 5) {
            resolve(sum);
        } else {
            reject("Sum is too large!");
        }
    });
    return customPromise;
}

// Usage:
getSumNum(2, 3)
    .then(result => console.log(result)) // Resolved
    .catch(error => console.error(error)); // Rejected
