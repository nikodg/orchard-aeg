export const preventBubble = e => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}