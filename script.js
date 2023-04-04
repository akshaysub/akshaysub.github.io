const sections = document.querySelectorAll('section');
const image = document.querySelector('img');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.style.transform = 'scale(1.1)';
    section.style.transition = 'transform 0.3s ease';
  });
  section.addEventListener('mouseout', () => {
    section.style.transform = 'scale(1)';
    section.style.transition = 'transform 0.3s ease';
  });
});

image.addEventListener('mouseover', () => {
  image.style.transform = 'scale(1.1)';
  image.style.transition = 'transform 0.3s ease';
});

image.addEventListener('mouseout', () => {
  image.style.transform = 'scale(1)';
  image.style.transition = 'transform 0.3s ease';
});