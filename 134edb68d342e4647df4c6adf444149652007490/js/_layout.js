// Navbar + Footer
const navbar = `
<nav class="bg-gray-800 text-white shadow-md">
  <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

    <!-- Empty left space for alignment -->
    <div></div>

    <!-- Hamburger button for mobile -->
    <button id="nav-toggle" class="block md:hidden focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <!-- Desktop Links -->
    <div id="nav-links" class="hidden md:flex justify-center flex-1 space-x-6">
      <a href="index.html" class="hover:text-gray-300 transition font-medium">Home</a>
      <a href="about.html" class="hover:text-gray-300 transition font-medium">About</a>
      <a href="products.html" class="hover:text-gray-300 transition font-medium">Products</a>
      <a href="blog.html" class="hover:text-gray-300 transition font-medium">Blog</a>
      <a href="contact.html" class="hover:text-gray-300 transition font-medium">Contact</a>
      <a href="dashboard.html" class="hover:text-gray-300 transition font-medium">Dashboard</a>
    </div>
  </div>

  <!-- Mobile Grid Links -->
  <div id="mobile-menu" class="hidden md:hidden bg-gray-700 py-4 px-4 grid grid-cols-3 gap-2 justify-center">
    <a href="index.html" class="hover:bg-gray-600 rounded py-2 text-center transition font-medium">Home</a>
    <a href="about.html" class="hover:bg-gray-600 rounded py-2 text-center transition font-medium">About</a>
    <a href="products.html" class="hover:bg-gray-600 rounded py-2 text-center transition font-medium">Products</a>
    <a href="blog.html" class="hover:bg-gray-600 rounded py-2 text-center transition font-medium">Blog</a>
    <a href="contact.html" class="hover:bg-gray-600 rounded py-2 text-center transition font-medium">Contact</a>
    <a href="dashboard.html" class="hover:bg-gray-600 rounded py-2 text-center transition font-medium">Dashboard</a>
  </div>
</nav>`;

const footer = `
<footer class="bg-gray-900 text-gray-200 mt-auto">
  <div class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

    <!-- About -->
    <div class="text-center md:text-left">
      <h3 class="text-xl font-bold text-white mb-2">Jo Meal Plans</h3>
      <p class="text-gray-400 text-sm">Healthy meal plans and supplements to keep you feeling your best every day.</p>
    </div>

    <!-- Contact / Social -->
    <div class="text-center md:text-right">
      <h4 class="font-semibold text-white mb-2">Connect</h4>
      <p class="text-gray-400 text-sm mb-2">Email: info@jomealplans.com</p>
      <p class="text-gray-400 text-sm mb-4">Phone: +1 234 567 890</p>
      <div class="flex justify-center md:justify-end space-x-4">
        <a href="#" class="hover:text-white transition">🌐</a>
        <a href="#" class="hover:text-white transition">🐦</a>
        <a href="#" class="hover:text-white transition">📘</a>
      </div>
    </div>

  </div>

  <div class="border-t border-gray-700 mt-6 py-4 text-center text-gray-500 text-sm">
    &copy; 2024 Jo Meal Plans & Store. All rights reserved.
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Full-height layout
  document.body.classList.add("min-h-screen", "flex", "flex-col");

  // Inject navbar & footer
  if (document.getElementById("navbar")) document.getElementById("navbar").innerHTML = navbar;
  if (document.getElementById("footer")) document.getElementById("footer").innerHTML = footer;

  // Stretch main
  const main = document.querySelector("main");
  if (main) main.classList.add("flex-grow");

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
