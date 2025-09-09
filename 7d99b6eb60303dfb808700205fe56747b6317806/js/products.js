const products = [
  { title: "Lorem Ipsum Product 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
  { title: "Lorem Ipsum Product 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
  { title: "Lorem Ipsum Product 3", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
  { title: "Lorem Ipsum Product 4", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
  { title: "Lorem Ipsum Product 5", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
  { title: "Lorem Ipsum Product 6", description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" }
];

function renderProducts(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = products.map(p => `
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
      <img src="${p.img}" alt="${p.title}" class="w-full h-56 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${p.title}</h3>
        <p class="text-gray-700">${p.description}</p>
      </div>
    </div>
  `).join('');
}
