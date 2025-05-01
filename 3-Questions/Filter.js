const data = { a: "short", b: "longer string", c: 123, d: "very long string indeed" };

function filterObjectProperties(obj,minLen){
    const result={};
    for (const key in obj) {
        if (obj[key].length >= minLen && typeof obj[key] === "string") {
            result[key]= obj[key];
        }
    }
    return result;
}

const filtered = filterObjectProperties(data, 6);
console.log(filtered); // Expected output: { b: 'longer string', d: 'very long string indeed' }
