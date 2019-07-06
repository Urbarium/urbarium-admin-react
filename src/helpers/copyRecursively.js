/* eslint-disable import/prefer-default-export */
export const copyRecursively = (obj, namesArray, value) => {
  if (namesArray.length > 1) {
    const name = namesArray.shift();
    return Object.assign({}, obj, { [name]: copyRecursively(obj[name], namesArray, value) });
  }
  return Object.assign({}, obj, { [namesArray[0]]: value });
};
