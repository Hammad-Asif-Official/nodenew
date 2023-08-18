const obj = {
    name: "hammad",
    age: "20",
    address: "bagwal"
}
const jsondata = JSON.stringify(obj);
console.log(jsondata);
const objectdata = JSON.parse(jsondata);
console.log(objectdata)