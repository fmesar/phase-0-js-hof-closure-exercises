function forEach(array, callback) {
  array.forEach(callback)
}

function map(array, callback) {

 const newArray = array.map(callback)
  return newArray

}

function filter(array, callback) {
  const newArray = array.filter(callback)
  return newArray

}

function every(array, callback) {
  const newArray = array.every(callback)
  return newArray
}

function some(array, callback) {
  const newArray = array.some(callback)
  return newArray
}

function majority(array, callback) {
if(callback(array) != true){
  return true
}else {return false}
}

function once(callback) {
  // let initialize = _.once(callback)
  // return function (){
  //   callback();
  //   initialize();
  // }
}

function groupBy(array, callback) {
  // const newArray= _.groupBy(array, callback);
  // const obj = Object.fromEntries(newArray);
  const obj = Object.assign({}, array);
   return obj

//  const result = Object.keys(array).map(callback())

//  return result
}

function arrayToObject(array,collback) {

  // const obj = Object.assign(collback, array);
// return obj.

// const obj = Object.assign({}, array);
// Object.entries(obj).forEach(entry => {
//   let key = entry[0]
//   let value = entry[1]
//   obj[key]= value
// })
// return obj
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
