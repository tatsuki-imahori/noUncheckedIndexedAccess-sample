const arr: string[] = [];
const arrValue = arr[0];

const upperArrValue = arrValue?.toUpperCase();

console.log(upperArrValue);


const obj: { [key: string]: string } = {};
const objValue = obj["nonExistentKey"];

const upperObjValue = objValue?.toUpperCase();

console.log(upperObjValue);