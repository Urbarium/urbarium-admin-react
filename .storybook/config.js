import { configure } from '@storybook/react';
import 'storybook-chromatic';

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
