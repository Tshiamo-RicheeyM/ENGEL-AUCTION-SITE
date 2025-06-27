

window.addEventListener('DOMContentLoaded', () => {
  const about = document.querySelector('.about');
  if (!about) return;

  const handleScroll = () => {
    const pos = about.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.3;

    if (pos < screen) {
      about.classList.add('show');
      window.removeEventListener('scroll', handleScroll); // once it's visible, stop checking
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // check once in case it’s already in view
});
