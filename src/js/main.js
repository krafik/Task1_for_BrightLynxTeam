'use strict';
const btnSum = document.querySelector('.ld'); //найдем в документе кнопку сложить

const resultDiv = document.querySelector('.result'); //найдем в документе блок с результатом
const res = resultDiv.querySelector('#res'); //найдем в блоке для результата место, куда будет выводиться сумма
resultDiv.style.display = 'none';

btnSum.addEventListener('click', function sum() {

  const numberOne = document.querySelector('#one');
  const numberTwo = document.querySelector('#two');

  let valOne = numberOne.value,
    valTwo = numberTwo.value;
    resultDiv.style.display = 'block';
  let sum = parseFloat(valOne) + parseFloat(valTwo);
  // console.log('sum = ' + sum.toFixed(1));
  res.innerHTML = sum.toFixed(1);
});

const btnOk = document.querySelector('#ok');
btnOk.addEventListener('click',()=>{
  resultDiv.style.display = 'none';
});