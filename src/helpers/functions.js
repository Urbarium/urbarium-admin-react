export const copyReplaceObject = (obj, names, value) => {
  if (Array.isArray(names)) {
    if (names.length > 1) {
      const name = names.shift();
      return Object.assign({}, obj, { [name]: copyReplaceObject(obj[name], names, value) });
    }
    return Object.assign({}, obj, { [names[0]]: value });
  }
  return Object.assign({}, obj, { [names]: value });
};


export const accessRecursively = (obj, namesArray) => {
  if (namesArray.length > 1) {
    const name = namesArray.shift();
    return accessRecursively(obj[name], namesArray);
  }
  return obj[namesArray[0]];
};
