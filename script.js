const Inputuser = document.getElementById('text-input');
const CheckBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const Check = input => {
  const originalInput = input; // Store for later output

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

CheckBtn.addEventListener('click', () => {
  Check(Inputuser.value);
  Inputuser.value = '';
});

Inputuser.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    Check(Inputuser.value);
    Inputuser.value = '';
  }
});