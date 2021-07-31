const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://pbs.twimg.com/media/E7NVaCQVoAAP_mS?format=jpg&name=900x900",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://pbs.twimg.com/media/E7SgOH5UcAIGA-g?format=jpg&name=900x900",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://pbs.twimg.com/media/E7OCVJfUYAAU1mi?format=jpg&name=900x900",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://pbs.twimg.com/media/Eulse2EXcAYXHvh?format=jpg&name=900x900",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const img = document.querySelector('img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const btnLite = document.querySelectorAll('button');
window.addEventListener('DOMContentLoaded', function () {
    let personNum = 0;

    btnLite.forEach(item => {
        item.addEventListener('click', function (e) {
            console.log(random());
            const btn = e.currentTarget.classList;
            if (btn.contains('prev-btn')) {
                personNum--;
                switchData();
            } else if (btn.contains('next-btn')) {
                personNum++;
                switchData();
            } else if (btn.contains('random-btn')) {
                personNum = random();
                switchData();
            }
        })
    });

    function switchData() {
        personNum > 3 ? personNum = 0 : personNum = personNum;
        personNum < 0 ? personNum = 3 : personNum = personNum;
        const person = reviews[personNum];
        img.src = person.img;
        author.innerHTML = person.name;
        job.innerHTML = person.job;
        info.innerHTML = person.text;
    }
    function random() {
        return Math.floor(Math.random() * 4)
    }
})
