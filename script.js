// script.js

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.textContent.trim().toLowerCase();

    let targetId = '';
    if (text === 'skills') targetId = '#skills';
    else if (text === 'projects') targetId = '#projects';
    else if (text === 'internships') targetId = '#internships';
    else if (text === 'contact') targetId = '#contact';

    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
