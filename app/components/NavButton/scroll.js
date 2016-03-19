import smoothScroll from 'smoothscroll';

function scrollCoach() {
  smoothScroll(document.querySelector('#coach'), 1300);
}

function scrollQuestions() {
  smoothScroll(document.querySelector('#questions'), 1300);
}

function scrollTop() {
  smoothScroll(document.querySelector('#top'), 1300);
}

export {
  scrollCoach,
  scrollQuestions,
  scrollTop,
};
