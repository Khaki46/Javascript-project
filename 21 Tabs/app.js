const btnLites = document.querySelectorAll('.tab-btn');
const aboutContent = document.querySelectorAll('.content');

// btnLites.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         btnLites.forEach((item) => {
//             item.classList.remove('active');
//         });
//         aboutContent.forEach((item) => {
//             item.classList.remove('active');
//         });
//         const btnId = btn.dataset.id;
//         const showCard = document.getElementById(btnId);
//         btn.classList.toggle('active');
//         showCard.classList.toggle('active');
//     })
// })

const about = document.querySelector('.about');

about.addEventListener('click', (e) => {
    const btnId = e.target.dataset.id;
    if (btnId) {
        btnLites.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        aboutContent.forEach((item) => {
            item.classList.remove('active');
            const element = document.getElementById(btnId);
            element.classList.add('active');
        })    
    }
})