export const extendClasses = (oldClass, newClass) => {
  console.log('start');
  if (Array.isArray(newClass)) {
    return [oldClass, ...newClass].join(' ');
  }
  return [oldClass, newClass].join(' ');
};

console.log(extendClasses('class', ['a', 'b']));
