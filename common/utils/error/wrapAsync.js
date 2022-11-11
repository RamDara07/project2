import { transform } from 'lodash';

const getWrapper = () => {
  return (module) => {
    return transform(module, (result, value, key) => {
      result[key] = (...args) => value(...args).catch(args[2]);
    });
  };
};

export const wrapAsync = getWrapper();
