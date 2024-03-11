// const form = document.querySelector('form');

// form.onsubmit = (event) => { //любые формы обрабатываются с помощью сабмита. Причем ловим на форме. ВСегда убирать по умолчианию браузерские настройки
//     event.preventDefault();
//     let formData = new FormData(form);
//     console.log(formData.get('userName'));
// }
// const list = [1,2,3,4];
// const list2 = [...list];
// const obj = {
//     name: 'vasya',
// };
// const obj2 = {...obj};
// console.log(list);
// console.log(list2);
// console.log(obj);
// console.log(obj2);

// const arr = [1,4,5];
// const [n1,n2,n3] = arr;
// console.log(n2,n3);

//#1
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

// function salari(obj){
//     let sum = 0;
//     let arr = [];
//     for(let items in obj){
//         sum = sum+obj[items];
//         arr.push(obj[items]);
//     }
//     console.log(sum);
//     console.log(Math.max(...arr));
// }
// salari(salaries);

//2 ШАХМАТНАЯ ДОСКА

// const form = document.querySelector('form');
const button = document.getElementById('but');
const inputx = document.getElementById('x');
const inputy = document.getElementById('y');

let table = document.createElement('table');
let arr = [];

function tableCreate(x, y) {
    let body = document.body;
    table.style.border = '1px solid black';
    for (let i = 0; i < x; i++) {
        let tr = table.insertRow();
        for (let j = 0; j < y; j++) {
            let td = tr.insertCell();
            if (j % 2 === 1 && i % 2 === 1) {
                td.classList.add('black');
                arr.push(td);
            }else if (j % 2 === 0 && i % 2 === 0) {
                td.classList.add('black');
                arr.push(td);
            } else {
                arr.push(td);
            }
            td.style.border = '1px solid black';
            td.style.width = '60px';
            td.style.height = '60px';
        }
    }
    body.appendChild(table);
}
let x;
let y;
button.addEventListener('click', () => {
    x = inputx.value;
    y = inputy.value;
    table = tableCreate(x, y);
});
table.addEventListener('click', (event) => {
    console.log(111111);
    console.log(arr)
    let element = event.target;
    if (element.tagName != 'TD') {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.toggle('black');
    }
});











