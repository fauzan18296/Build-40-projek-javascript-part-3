const reviews = [
  {
    image: "Img/data1.jpg",
    name: "Betty Page",
    job: "Front-end developer",
    quotes: "With software there are only two possibilites: either the users control the programme or the programme controls the users. If the programme controls the users, and the developer controls the programme, then the programme is an instrument of unjust power."
  },
  {
    image: "Img/data2.jpg",
    name: "Dora Becker",
    job: "Full-stack developer",
    quotes:"You are a computer. If you become front-end you'll count the likes on social media. If you become back-end you'll be breathing deep on a mountain. Listen! one life man. Become a Full-stack."
  },
   {
   image: "Img/data3.jpg",
   name: "Ronald Page",
   job: "Back-end developer",
   quotes: "A good standalone plugin can also make you a fair amount of money. Many developers make a decent living by simply maintaining and updating one or two crucial plugins that are far better than anything available for free."
  }, 
  {
    image: "Img/data4.jpg",
    name: "Dennis Jensen",
    job: "Game developer",
    quotes: "Gamers can feel when developers are passionate about their games. They can smell it like a dog smells fear. Don't be afraid to hold onto your unique vision: just be aware that it may not turn out exactly how you envisioned."
  }
]

const img = document.getElementById("img-profile");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomProfile = document.querySelector(".random-btn");

let index = 0;

document.addEventListener("DOMContentLoaded", () => {
showData();
},showData = () => {
  let data = reviews[index];
  img.src = data.image;
  author.textContent = data.name;
  job.textContent = data.job;
  info.textContent = data.quotes;
});

nextBtn.addEventListener("click", () => {
  index++;
  if(index > reviews.length - 1) {
    index = 0;
  } 
  showData();
});

prevBtn.addEventListener("click", () => {
  index--;
  if(index < 0) {
  index = reviews.length - 1;
};
  showData();
})

randomProfile.addEventListener("click", () => {
  index = Math.floor(Math.random() * reviews.length);
  showData();
})