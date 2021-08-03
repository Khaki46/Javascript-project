const btn = document.querySelector('button');
const showUl = document.querySelector('ul');

// let num = 0;

// btn.addEventListener('click', function () {
//     num++;
//     num % 2 == 1 ? showUl.classList.add('show-links') : showUl.classList.remove('show-links')
// });
btn.addEventListener('click', function () {
    // if (showUl.classList.contains('show-links')) {
    //     showUl.classList.remove("show-links");
    // } else {
    //     showUl.classList.add('show-links');
    // }
    showUl.classList.toggle('show-links');
})
