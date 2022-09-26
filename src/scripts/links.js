import { preventBubble } from './helper';

const handleClick = e => {
  preventBubble(e);
  console.log(e.target);
}

export default () => {
  const readMoreLinks = document.querySelectorAll('.latest-from-aeg a');
  for (let i = 0; i < readMoreLinks.length; i++) {
    readMoreLinks[i].addEventListener('click', handleClick);
  }
}