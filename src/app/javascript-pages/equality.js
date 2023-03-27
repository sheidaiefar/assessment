var data2 = { a: 17, b: { c: 'Test' } };
var data1 = { a: 17, b: { c: 'Test'} };

var data2 = { a: 17, b: { c: 'Test' } };
var data1 = { a: 17, b: { c: 'Test'} };

function check(obj1,obj2){
if((obj1===undefined || obj1===null ) || (obj2=== undefined || obj2===null )){
  return true
}

return (JSON.stringify(obj1)) === (JSON.stringify(obj2));
}

console.log(check(data2,data1))
