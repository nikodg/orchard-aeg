import './styles/reset.scss';
import './styles/fonts.scss';
import './main.scss';

import includeArticles from './scripts/articles';
import modalHandler from './scripts/modal';
import linksHandler from './scripts/links';

document.addEventListener('DOMContentLoaded', () => {
  includeArticles();
  modalHandler();
  linksHandler();
});
