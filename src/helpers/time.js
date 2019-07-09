
export const today = () => (new Date());

export const todayAsString = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
};
