export const onlyNumbers = (data: string): boolean => {
  const numbers = /^[0-9.]+$/;
  if (data === "") return false;
  else if (data.match(numbers)) {
    return true;
  } else {
    return false;
  }
};
