export const isObject = (value) => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

export function createReactiveObject<T>(target: T): T {
  if (!isObject(target)) {
    return target
  }
  return new Proxy(target, {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver);
      if (isObject(result)) {
        return createReactiveObject(result);
      }
      return result;
    },
    set() {
      console.error('The preference is read only!');
      return false;
    }
  });
}