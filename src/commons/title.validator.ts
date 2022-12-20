const validate = (title: string): boolean => {

  return /[a-zA-Z\d\s\-.]/.test(title);
};

export default validate;