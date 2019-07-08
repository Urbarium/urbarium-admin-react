export const navs = {
  HOME: 'home',
  BONOS: 'bonos',
  USERS: 'users',
};

export function actionProductNavBonos(id = 'nuevo') {
  const payload = { id };
  return { type: 'PRODUCT_NAV_SET', payload };
}

export function actionProductNavUsers(id = 'nuevo') {
  const payload = { id };
  return { type: 'PRODUCT_NAV_SET', payload };
}

export function actionProductNavHome() {
  return { type: 'PRODUCT_NAV_SET', payload: {} };
}

export const actionProductNavReset = actionProductNavHome;
