export const numberPercentageValidator = {
  validator(rule: any, value: any) {
    if (!value) {
      return Promise.resolve();
    }
    const intValue = parseFloat(value);
    if (intValue >= 0 && intValue <= 100) {
      return Promise.resolve();
    }
    return Promise.reject("Not valid");
  },
};

export const integerPercentageValidator = {
  validator(rule: any, value: any) {
    if (!value) {
      return Promise.resolve();
    }
    const intValue = parseInt(value, 10);
    if (intValue >= 0 && intValue <= 100) {
      return Promise.resolve();
    }
    return Promise.reject("Not valid");
  },
};
