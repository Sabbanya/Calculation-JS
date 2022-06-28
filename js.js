otvet_text = document.getElementById('otvet');
delet_number = document.getElementById('delet');
delenie = document.getElementById('delenie');
ymno = document.getElementById('ymno');
minuss = document.getElementById('minus');
plus = document.getElementById('plus');
ravno = document.getElementById('ravno');
number_tochka = document.getElementById('.');
number_0 = document.getElementById('0');
number_1 = document.getElementById('1');
number_2 = document.getElementById('2');
number_3 = document.getElementById('3');
number_4 = document.getElementById('4');
number_5 = document.getElementById('5');
number_6 = document.getElementById('6');
number_7 = document.getElementById('7');
number_8 = document.getElementById('8');
number_9 = document.getElementById('9');
let znach1 = 0;
let znach2 = 0;
let arif = 'null';

delet_number.onclick = function () {
  otvet_text.innerText = '0';
};

number_tochka.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_tochka.innerText;
  } else {
    otvet_text.innerText += number_tochka.innerText;
  }
};
number_0.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_0.innerText;
  } else {
    otvet_text.innerText += number_0.innerText;
  }
};
number_1.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_1.innerText;
  } else {
    otvet_text.innerText += number_1.innerText;
  }
};
number_2.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_2.innerText;
  } else {
    otvet_text.innerText += number_2.innerText;
  }
};
number_3.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_3.innerText;
  } else {
    otvet_text.innerText += number_3.innerText;
  }
};
number_4.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_4.innerText;
  } else {
    otvet_text.innerText += number_4.innerText;
  }
};
number_5.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_5.innerText;
  } else {
    otvet_text.innerText += number_5.innerText;
  }
};
number_1.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_1.innerText;
  } else {
    otvet_text.innerText += number_1.innerText;
  }
};
number_6.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_6.innerText;
  } else {
    otvet_text.innerText += number_6.innerText;
  }
};
number_7.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_7.innerText;
  } else {
    otvet_text.innerText += number_7.innerText;
  }
};
number_8.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_8.innerText;
  } else {
    otvet_text.innerText += number_8.innerText;
  }
};
number_9.onclick = function () {
  if (otvet_text.innerText == '0') {
    otvet_text.innerText = number_9.innerText;
  } else {
    otvet_text.innerText += number_9.innerText;
  }
};

//ARIFMETIKA
plus.onclick = function () {
  znach1 = otvet_text.innerText;
  otvet_text.innerText = '0';
  arif = 'summa';
};
minuss.onclick = function () {
  znach1 = otvet_text.innerText;
  otvet_text.innerText = '0';
  arif = 'minus';
};
ymno.onclick = function () {
  znach1 = otvet_text.innerText;
  otvet_text.innerText = '0';
  arif = 'ymno';
};
delenie.onclick = function () {
  znach1 = otvet_text.innerText;
  otvet_text.innerText = '0';
  arif = 'delenie';
};

ravno.onclick = function () {
  console.log(arif);
  switch (arif) {
    case 'summa':
      otvet_text.innerText(summa(znach1, otvet_text.innerText));
      break;
    case 'minus':
      otvet_text.innerText(minus(znach1, otvet_text.innerText));
      break;
    case 'ymno':
      otvet_text.innerText(ymnoz(znach1, otvet_text.innerText));
      break;
    case 'delenie':
      otvet_text.innerText(deleni(znach1, otvet_text.innerText));
      break;
    default:
      break;
  }
};
function summa(znach1, znach2) {
  otvet_text.innerText = Number(znach1) + Number(otvet_text.innerText);
}
function minus(znach1, znach2) {
  otvet_text.innerText = Number(znach1) - Number(otvet_text.innerText);
}
function ymnoz(znach1, znach2) {
  otvet_text.innerText = Number(znach1) * Number(otvet_text.innerText);
}
function deleni(znach1, znach2) {
  otvet_text.innerText = Number(znach1) / Number(otvet_text.innerText);
}

black_btn = document.getElementById('black');
white_btn = document.getElementById('white');

white_btn.onclick = function () {
  document.getElementById('calculator').classList.remove('black__calc');
  document.getElementById('calculator').classList.add('white__calc');
  document.getElementById('otvet').style.color = 'black';
  document.getElementById('otvet').style.transition = 'color 0.5s ease';
};
black_btn.onclick = function () {
  document.getElementById('calculator').classList.add('black__calc');
  document.getElementById('otvet').style.color = 'white';
  document.getElementById('otvet').style.transition = 'color 0.5s ease';
};
