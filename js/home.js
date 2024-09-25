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


// CLASSES START
let fetchData = async () => {
    let html = ""
    let res = await fetch("http://localhost:3000/classes")
    let data = await res.json()

    data.forEach((element) => {
        html += `
        <div class="bg-white shadow-custom overflow-hidden text-right w-[500px] lg:w-[350px]" dir="rtl">
            <img src="${element.imageUrl}" alt="${element.title}" class="w-[100%] object-contain mb-2" />
            <div class="p-4 relative">
                <h3 class="text-4xl text-[#25262A] font-[BnazaninBold] mb-1">${element.title}</h3>
                <span class="font-[Gandom]"><strong class="text-[#909090]">مربی</strong> - ${element.trainer}</span>
                <span class="text-lg font-[Gandom] font-bold text-white bg-[#f13a11] rounded-full p-3 absolute left-11 top-9">$${element.price}</span>
                <p class="text-lg font-[Gandom] text-[#666262] mb-4 mt-4 lg:w-[90%]">${element.description}</p>
            </div>
        </div>
    `
    })
    document.querySelector("div#classes-root").innerHTML = html
}

document.addEventListener("DOMContentLoaded", fetchData);
// CLASSES END