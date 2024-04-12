function addValues(value1, value2) {
  // console.log(typeof(value1));
  // console.log(typeof(value2));
  if (typeof(value1) === 'undefined' || typeof(value2) === 'undefined'){
    throw new Error('Unable to add values');
  }

  if (typeof(value1) === 'string' && typeof(value2) === 'string'){
    return value1.toString() + value2.toString();

  } else if (typeof(value1) === 'number' && typeof(value2) === 'number') {
    return value1 + value2;

  } else if (typeof(value1) === 'bigint' && typeof(value2) === 'bigint'){
    return BigInt(value1) + BigInt(value2);
  
  } else if (typeof(value1) === 'boolean' && typeof(value2) === 'boolean') {
    if (value1 + value2 != 0) {
      return true
    } else {
      return false
    }

  } else if (Array.isArray(value1) && Array.isArray(value2)) {
    return [...value1, ...value2]
  } else if (typeof(value1) === 'object' && typeof(value2) === 'object') {
    let obj = {...value1, ...value2}; // spreading
    return obj;
  } else {
    throw new Error('Unable to add values');
  }
}


// console.log(addValues(1,-1));
// console.log(addValues('string1','STRING2'));
// console.log(addValues(1234567890123456789012345n, 21212121212121212121212n));
// console.log(addValues(false, false));
// console.log(addValues(true, true));
// console.log(addValues(false, true));
// console.log(addValues({name: 'vinicius'}, {age: 24}));
// console.log(addValues([12],[13]));
// console.log(addValues([12],['hello']));