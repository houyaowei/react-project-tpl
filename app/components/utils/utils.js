const trim = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.replace(/\s+/g, "");
};

export {
  trim
};
