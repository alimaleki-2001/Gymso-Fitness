// NAVBAR START
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
// NAVBAR END

// CLASSES START
// const classCards = document.getElementById("class-cards");

//     fetch('http://localhost:3000/classes')  // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => {
//         data.forEach(item => {
//           const card = document.createElement('div');
//           card.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'overflow-hidden', 'p-4', 'text-right');

//           card.innerHTML = `
//             <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover mb-4">
//             <div class="text-lg font-bold">${item.title}</div>
//             <div class="text-sm text-gray-500 mb-2">مربی: ${item.trainer}</div>
//             <div class="text-sm mb-4">${item.description}</div>
//             <div class="text-lg font-bold text-red-500">${item.price} تومان</div>
//           `;

//           classCards.appendChild(card);
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching the data:', error);
//       });
      // CLASSES END