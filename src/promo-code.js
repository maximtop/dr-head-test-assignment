const getRandomInt = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
};

const getRandomChar = (string) => {
  const stringArr = string.split('');
  return stringArr[getRandomInt(0, stringArr.length)];
};

const genPromoCode = (pattern = 'XX-XXXX1234') => {
  const numbersStr = '0123456789';
  const lettersStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const patternArr = pattern.split('');
  const numReg = /^[0-9]$/;
  const letterReg = /^[a-zA-Z]$/;
  const code = patternArr.map((el) => {
    if (numReg.test(el)) {
      return getRandomChar(numbersStr);
    } else if (letterReg.test(el)) {
      return getRandomChar(lettersStr);
    }
    return el;
  });
  return code.join('');
};

export default genPromoCode;
