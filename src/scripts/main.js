'use strict';

const form = document.querySelectorAll('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const inputName = input.name;
  const inputId = input.id;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputId);
  label.textContent = capitalize(inputName);

  input.setAttribute ('placeholder', capitalize(inputName));

  function capitalize(str) {
    return str.charAt(0).toUpperCase + str.slice(1);
  }

  const parent = input.parentElement;

  if (!parent) {
    parent.incertBefore(label, input);
  }
});
