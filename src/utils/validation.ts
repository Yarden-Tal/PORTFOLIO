export const validateEmail = (email: string): boolean => {
    let regex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };