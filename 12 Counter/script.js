'use strict';

const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

const showNum = document.getElementById('showNum');

// decrease.addEventListener('mousedown', function () {
//     showNum.innerHTML--;
//     checkNum();
// })
// reset.addEventListener('mousedown', function () {
//     showNum.innerHTML = 0;
//     checkNum();
// })

// increase.addEventListener('mousedown', function () {
//     showNum.innerHTML++;
//     checkNum();
// })

// function checkNum() {
//     let getShowNum = showNum.innerHTML;
//     if (getShowNum > 0) {
//         showNum.style.color = "aquamarine";
//     } else if (getShowNum < 0) {
//         showNum.style.color = "pink";
//     } else if (getShowNum == 0) {
//         showNum.style.color = "black";        
//     }
// }

const btnLite = document.querySelectorAll('.btn');

btnLite.forEach(item => {
    item.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('increase')) {
            showNum.innerHTML++;
        } else if(styles.contains('decrease')){
            showNum.innerHTML--;
        } else {
            showNum.innerHTML = 0;
        }
        let getShowNum = showNum.innerHTML;

        if (getShowNum > 0) {
            showNum.style.color = "aquamarine";
        } else if (getShowNum < 0) {
            showNum.style.color = "pink";
        } else if (getShowNum == 0) {
            showNum.style.color = "black";
        };
    })
});
const ev = document.getElementById('2');
ev.addEventListener('click', function (e) {
    console.log("target指向触发目标:"+e.target.id);
    console.log("current指向绑定目标:"+e.currentTarget.id);
})
