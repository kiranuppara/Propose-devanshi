const febHolidays = [

"Dear Devanshi…",
"You are my best friend…",
"Tum hi meri true love ho 😊",
"You alone are enough for me…",
"Mere liye tum sabse special ho 🤩",
"In my sadness, you are my strength…",
"Meri khushi ki wajah tum ho ✨",

"You are the meaning of my life ❤",
"Hamesha… I love you ❤️",
"You are my everything ✔",
"You are my soulmate ✨💕",

"I’m waiting for the day when I can call you my wife 🤭💞",
"Main hamesha tumhare saath rahunga 🤞",
"Even if distance comes, my heart will never change for you 🥰",
"I promise… main kabhi tumhe hurt nahi karunga ❤️",

"You are the prettiest, cutest, funniest, and sweetest girl alive 🤞✍",
"Ek word mein… you are perfect 😍",

"After meeting you, I became the happiest man 🥰",
"Roz Bhagwan ko thank you bolta hoon for sending you into my life ❤️🙏",
"Tumhari happiness ke liye I’ll always give my best 🥺💞",

"You are the most special person in my life 🥰",
"Main tumhe kabhi khona nahi chahta 😒",
"And trust me… I don’t want anyone else 🥰",
"Tumse better koi nahi ❤️",
"You’re the best, Devanshi 💖",

"Whenever something good happens, the first name in my mind is yours 💞",

"The moments and memories we shared are treasures of my heart 💓",

"We faced some tough times 😢",
"But humne sab kuch saath mein overcome kiya 🥰",
"That made me realize how important you are to me ❤️",

"I’m in binary love — you are my only 1 💕",
"Baaki sab 0 hain 😍",

"💖 Last but Not Least… 💖",

"I love you so much, Devanshi ❤️💋",
"Aaj, Kal, Forever and Always ♾️💞"


];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
    **febHolidays.forEach((holiday, idx) => {**

      **const liEl = document.createElement("li");**

      **liEl.style.setProperty("--day\_idx", idx);**

      **liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1**

        **}</time><span>${holiday}</span>`;**

      **ulEl.append(liEl);**

    **});**

    **ulEl.style.setProperty("--rotateDegrees", rotate);**

    **adjustDay(0);**

}
function adjustDay(nr) {
    **daynumber += nr;**

    **ulEl.style.setProperty("--currentDay", daynumber);**

    **const activeEl = document.querySelector("li.active");**

    **if (activeEl) activeEl.classList.remove("active");**

    **activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;**

    **const newActiveEl = document.querySelector(**

      **`li:nth-child(${activeIndex + 1})`**

    **);**

    **document.body.style.backgroundColor = window.getComputedStyle(**

      **newActiveEl**

    **).backgroundColor;**

    **newActiveEl.classList.add("active");**

}
window.addEventListener("keydown", (e) => {
    **switch (e.key) {**

      **case "ArrowUp":**

        **adjustDay(-1);**

        **break;**

      **case "ArrowDown":**

        **adjustDay(1);**

        **break;**

      **default:**

        **return;**

    **}**

});