function deepCopy(obj){
  var newObj = JSON.parse(JSON.stringify(obj));
  return (newObj);
}
