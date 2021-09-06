export const extendClasses = (oldClass, newClass, ...moreClasses) => {

  if (Array.isArray(newClass)) {
    return [oldClass, ...newClass].join(' ');
  }
  return [oldClass, newClass, ...moreClasses].join(' ');
};


