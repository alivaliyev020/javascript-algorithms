export const userValidation = (str) => {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    /[a-zA-Z]/.test(str.slice(0, 1)) && //ilk karakter herf olduqda true verir
    (/^\w+$/).test(str) &&// karakterler herfler , reqemler ve alt xetden yarana biler
    (/[a-zA-Z0-9]/).test(str.charAt(str.length-1))//ve ya str.slice(-1) herflerden ve ya reqemlerden yarana biler
  ) {
    return `${str} ${true}`;
  } else {
    return false;
  }
};

// regular expression /[a-zA-Z],
// slice(0,1) - ilk herfi getirdi,
// evezine charAt(0) da istifade etmek olardi  
