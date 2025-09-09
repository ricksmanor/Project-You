const blogPosts = [
  {
    title: "Lorem Ipsum Blog Post 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Lorem Ipsum Blog Post 2",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Lorem Ipsum Blog Post 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Lorem Ipsum Blog Post 4",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

function renderBlog(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = blogPosts.map(post => `
    <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      <h2 class="text-2xl font-bold mb-3">${post.title}</h2>
      <p class="text-gray-700 leading-relaxed">${post.description}</p>
    </div>
  `).join('');
}
