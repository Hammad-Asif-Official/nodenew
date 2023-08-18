const fs = require("fs");
// non-blocking io modle
// fs.writeFile("file.txt", "data is added to file", () => {
//     console.log("data is succeffully added");
// })

// const b = fs.writeFileSync("file2.txt", "data enterd in file 2  ");
// console.log(b);
// console.log("simplyjs subcribe");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//     console.log(data);
// })
// // new data enter (update)  
// fs.appendFile("file.txt", "123456789", () => {
//     console.log("data added")
// })
// // file Rename 
// fs.rename("file.txt", "hammad.txt", (err) => {
//     console.log(err);
// })
const c = fs.writeFileSync("file3.txt", "ghfjdksyhfnvifhcn ");
console.log(c);
console.log("simplyjs subcribe");
fs.readFile("file3.txt", "utf-8", (err, data) => {
    console.log(data);
})
fs.unlinkSync("file3.txt");