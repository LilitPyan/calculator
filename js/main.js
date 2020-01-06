const display = document.getElementById('calc');

let str = '';

function getNum(number) {
  if (str.length === 0 && number === '0') {
    return;
  }

  str = str + number;
  display.innerHTML = str;
}

function operators(op) {
  if (str[str.length - 1] === op || ['+', '-', '*', '/'].includes(str[str.length - 1])) {
    return;
  }

  str = str + op;
  display.innerHTML = str;
}

function clear() {
  display.innerHTML = "";
}

function equal() {
  let firstNum = '';
  let lastNum = '';

  while (str.indexOf('+') !== -1) {
    for (let i = 0; i < str.indexOf('+'); i++) {
      if (str[i] !== '+' || str[i] !== '-' || str[i] !== '*' || str[i] !== '/') {
        firstNum = firstNum + str[i];
      }
    }

    for (let i = str.indexOf('+') + 1; i < str.length; i++) {
      if (str[i] !== '+' || str[i] !== '-' || str[i] !== '*' || str[i] !== '/') {
        lastNum = lastNum + str[i];
      }
    }

    str = str.replace(`${firstNum}+${lastNum}`, (+firstNum) + (+lastNum));
    display.innerHTML = str;

    firstNum = '';
    lastNum = '';
  }

  while (str.indexOf('-') !== -1) {
    for (let i = 0; i < str.indexOf('-'); i++) {
      if (str[i] !== '+' || str[i] !== '-' || str[i] !== '*' || str[i] !== '/') {
        firstNum = firstNum + str[i];
      }
    }

    for (let i = str.indexOf('-') + 1; i < str.length; i++) {
      if (str[i] !== '+' || str[i] !== '-' || str[i] !== '*' || str[i] !== '/') {
        lastNum = lastNum + str[i];
      }
    }

    str = str.replace(`${firstNum}-${lastNum}`, (+firstNum) - (+lastNum));
    display.innerHTML = str;

    firstNum = '';
    lastNum = '';
  }
}
