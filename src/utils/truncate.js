export const truncateString = (str, num, endPosition = true) => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }

  // Return str truncated with '...' concatenated to the end of str or in the middle depending on the position
  return endPosition
    ? str.slice(0, num) + "..."
    : str.slice(0, num) + "..." + str.slice(-4);
};
