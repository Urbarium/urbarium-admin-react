export const copyReplaceObject = (obj, names, value) => {
  if (Array.isArray(names)) {
    if (names.length > 1) {
      const name = names.shift();
      return { ...obj, [name]: copyReplaceObject(obj[name], names, value) };
    }
    return { ...obj, [names[0]]: value };
  }
  return { ...obj, [names]: value };
};


export const accessRecursively = (obj, namesArray) => {
  if (namesArray.length > 1) {
    const name = namesArray.shift();
    return accessRecursively(obj[name], namesArray);
  }
  return obj[namesArray[0]];
};
