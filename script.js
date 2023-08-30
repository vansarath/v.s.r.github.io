let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currenWordIdex = 0;
let maxWordIndex = words.length -1;
words[currenWordIdex].style.opacity = "1";

let changeText = ()=>{
    let currenWord = words[currenWordIdex];
    let nexWord = currenWordIdex === maxWordIndex ? words[0]: words[currenWordIdex + 1];

    Array.from(currenWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nexWord.style.opacity="1";
    Array.from(nexWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
});
    currenWordIdex = currenWordIdex === maxWordIndex ? 0 : currenWordIdex + 1;
};

changeText();
setInterval(changeText,3000)

// Circle Skill------------------------------------------------
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})

// Mix portfolio section-------------------------------------------->
var mixer = mixitup('.portfolio-gallery');

// active Menu section-------------------------------------------->
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window .scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// Sticky navbar------------------------------------------------------>
const header = document.querySelectorAll('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// toggle icon navbar------------------------------------------------------>
let menuIcon = document.querySelectorAll("#menu-icon");
let navlist = document.querySelectorAll(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// parallax------------------------------------------------------>

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));