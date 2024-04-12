function addValues(value1, value2) {
  try{
    // console.log(typeof(value1));
    // console.log(typeof(value2));
    if (typeof(value1) === 'undefined' || typeof(value2) === 'undefined' || value1 === null || value2 === null){
      throw new Error('Unable to add values');
    }

    if (typeof(value1) === 'string' && typeof(value2) === 'string'){
      return value1.toString() + value2.toString();

    } else if (typeof(value1) === 'number' && typeof(value2) === 'number') {
      return value1 + value2;

    } else if (typeof(value1) === 'bigint' && typeof(value2) === 'bigint'){
      return BigInt(value1) + BigInt(value2);
    
    } else if (typeof(value1) === 'boolean' && typeof(value2) === 'boolean') {
      // OR operator
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
    }

    throw new Error ('Unable to add values');
  } catch(err) {
    console.error(err);
  }
}

function invertBoolean(bool) {
  try {
    if (typeof(bool) === 'boolean' || bool == 1 || bool == 0 || bool == '1' || bool =='0') {
      if (bool == true) {
        return false;
      }  else {
        return true;
      }
    }
    throw new Error('Unable to invert boolean');
    
  } catch (err) {
    console.error(err);
  }
}


function stringifyValue(value) {
  try{
    if (typeof(value) === 'object') {
      return JSON.stringify(value);
    } else {
      return value.toString();
    }
    
  } catch(err){
    console.error('Error', err);
  }
}

function convertToNumber(value) {
  try {
    if (typeof(value) === 'string'){
      const floatValue = parseFloat(value);
      if (!isNaN(floatValue)) {
        return floatValue;

      } else {
        const intValue = parseInt(value)
        if (!isNaN(intValue))
          return intValue
      }

    } else if (typeof(value) === 'boolean') {
      if (value == true) {
        return 1;
      } else {
        return 0;
      }

    } else if (typeof(value) === 'bigint') {
      return Number(value)

    } else if (typeof(value) === 'object') {
      const stringValue = JSON.stringify();
      const floatValue = parseFloat(stringValue);
      if (!isNaN(floatValue))
          return floatValue

    }

    if (typeof(value) === 'number')
      return value

    throw new Error('Unable to convertToNumber');

  } catch (err) {
    console.error(err);
  }
}

function coerceToType(value, type) {
  if (type.toLowerCase() == 'number') {
    return convertToNumber(value);

  } else if (type.toLowerCase() == 'string') {
    return stringifyValue(value);
  
  } else if (type.toLowerCase() == 'boolean') {
    const statement = invertBoolean(value);
    if (statement == 1){
      return false;
    } else if (statement == 0) {
      return true
    }
  }
}

// debugging...

//addValues()
// console.log(addValues(1,-1));
// console.log(addValues('string1','STRING2'));
// console.log(addValues(1234567890123456789012345n, 21212121212121212121212n));
// console.log(addValues(false, false));
// console.log(addValues(true, true));
// console.log(addValues(false, true));
// console.log(addValues({name: 'vinicius'}, {age: 24}));
// console.log(addValues([12],[13]));
// console.log(addValues([12],['hello']));
// console.log(addValues(1,2n));


//invertBoolean()
// console.log(invertBoolean(true));
// console.log(invertBoolean(false));
// console.log(invertBoolean(1));
// console.log(invertBoolean('1'));
// console.log(invertBoolean(0));
// console.log(invertBoolean('0'));
// console.log(invertBoolean('vinicius'));

//stringifyValue()
// console.log(stringifyValue(1));
// console.log(stringifyValue(9999999999999999999999999n));
// console.log(stringifyValue({name: 'Vinicius', age: 24}));
// console.log(stringifyValue([12,13,'vinicius']));
// console.log(stringifyValue(null));

//convertToNumber()
// console.log(convertToNumber(111));
// console.log(convertToNumber('1212121'));
// console.log(convertToNumber('1.233'));
// console.log(convertToNumber('1999'));
// console.log(convertToNumber(999999n));

//coerceToType()
// console.log(coerceToType(1,'number'));
// console.log(coerceToType('1444', 'Number'));
// console.log(coerceToType(true,'number'));
// console.log(coerceToType(false,'number'));
// console.log(coerceToType(1212121n, 'number'));
// console.log(coerceToType({name: 'vinicius'}, 'number'));
// console.log(coerceToType('vinicius', 'number')); // forcing error
// console.log(coerceToType(1,'string'));
// console.log(coerceToType('128.2','string'));
// console.log(coerceToType(true,'string'));
// console.log(coerceToType(1234n,'string'));
// console.log(coerceToType([123, 1], 'string'));
// console.log(coerceToType({name: 'vinicius', age: 24},'string'));
// console.log(coerceToType('1','boolean'));
// console.log(coerceToType(1,'boolean'));
// console.log(coerceToType(0,'boolean'));
// console.log(coerceToType('2','boolean')); // forcing error
