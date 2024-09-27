// NAVBAR START
let menuButton = document.getElementById('menu-button');
let mobileMenu = document.getElementById('mobile-menu');
let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
// NAVBAR END

// FIRST TRAINER START
let fetchTrainer_1 = async () => {
    let html = ""
    let res = await fetch("http://localhost:3000/FirstTrainer")
    let data = await res.json()

    data.forEach((element) => {
        html += `
        <div class="relative">
         <img src="${element.img}" class="w-full" alt="مربی" />

         <div class="team-info bg-white p-5 shadow-xl flex flex-col items-start">
            <h3 class="text-3xl font-[BnazaninBold] text-[#25262A]">${element.name}</h3>
            <span class="text-[#666262]">${element.job}</span>

            <ul class="flex flex-col absolute right-8 bottom-4 mt-3 text-lg">
                <li><a href="https://twitter.com/" class="text-[#666262] hover:text-[#f13a11] transition-all duration-[0.4s]"><i
                    class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/" class="text-[#666262] hover:text-[#f13a11] transition-all duration-[0.4s]"><i
                    class="fab fa-instagram"></i></a></li>
            </ul>
         </div>
        </div>
    `
    })
    document.querySelector("div#FirstTrainer-root").innerHTML = html
}

document.addEventListener("DOMContentLoaded", fetchTrainer_1);
// FIRST TRAINER END

// SECOND TRAINER START
let fetchTrainer_2 = async () => {
    let html = ""
    let res = await fetch("http://localhost:3000/SecondTrainer")
    let data = await res.json()

    data.forEach((element) => {
        html += `
        <div class="relative">
         <img src="${element.img}" class="w-full" alt="مربی" />

         <div class="team-info bg-white p-5 shadow-xl flex flex-col items-start">
            <h3 class="text-3xl font-[BnazaninBold] text-[#25262A]">${element.name}</h3>
            <span class="text-[#666262]">${element.job}</span>

            <ul class="flex flex-col absolute right-8 bottom-4 mt-3 text-lg">
                <li><a href="https://www.instagram.com/" class="text-[#666262] hover:text-[#f13a11] transition-all duration-[0.4s]"><i
                    class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/" class="text-[#666262] hover:text-[#f13a11] transition-all duration-[0.4s]"><i
                    class="fab fa-facebook"></i></a></li>
            </ul>
         </div>
        </div>
    `
    })
    document.querySelector("div#SecondTrainer-root").innerHTML = html
}

document.addEventListener("DOMContentLoaded", fetchTrainer_2);
// SECOND TRAINER END