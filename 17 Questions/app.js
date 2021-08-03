//using selectors inside the element
// traversing the dom

const answerList = document.querySelectorAll('.question');

// answerList.forEach(element => {
//     const btn = element.querySelector('.question-btn');
//     btn.addEventListener('click', function () {
//         element.classList.toggle('show-text');
//     });
// });

answerList.forEach(element => {
    const btn = element.querySelector('.question-btn');
    btn.addEventListener('click', function () {

        answerList.forEach(item => {
            if (item !== element) {
                item.classList.remove('show-text');
            }
        })

        element.classList.toggle('show-text');
    });
});
