export const navs = {
  HOME: 'home',
  BONOS: 'bonos',
};

export function actionProductNavSet(key, id) {
  const payload = { key, id };
  return { type: 'PRODUCT_NAV_SET', payload };
}

export function actionProductNavReset() {
  return actionProductNavSet('home');
}
