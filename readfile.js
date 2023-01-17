const fs = require("fs");

function getFileData(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

getFileData("text.txt").then((value) => {
    console.log(value);
}).catch((err) => {
    console.log("err", err);
});