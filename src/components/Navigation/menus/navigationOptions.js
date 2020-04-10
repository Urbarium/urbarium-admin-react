/* eslint-disable no-undef */
/**
 * @param rx string representing regular expression to match url.
 * In cases where an url represents a resource like:
 * https://urbarium.org/bonos/9p491NmKg7lyqmlpjS2z/beneficiarios
 * it returns a hash with { id: String, action: String }
 * being in this case id = 9p491NmKg7lyqmlpjS2z
 * and action = beneficiarios
 */
const pathMatches = rx => window.location.pathname.match(rx);
const pathArgs = () => {
  const parts = window.location.pathname.split('/');
  return { page: parts[0], id: parts[1], action: parts[2] }
};

const pagesOpts = [
  {
    key: 'bonos',
    matches: () => pathMatches(/^\/bonos\/.*/),
    isCollapsed: false,
    isResizeDisabled: false,
  },
  {
    key: 'users',
    regexp: () => pathMatches(/^\/users\/.*/),
    isCollapsed: false,
    isResizeDisabled: false,
  },
  {
    key: 'home',
    regexp: () => pathMatches(/^\/$/),
    isCollapsed: true,
    isResizeDisabled: true,
  },
];

export default () => Object.assign({}, pagesOpts.find(pageOpts => pathMatches(pageOpts)), pathArgs());
