// Layout colors (centralized)
const colors = {
  // Header
  headerBg: "bg-pink-400",
  headerText: "text-white",
  subText: "text-white",
  
  // Navbar
  navbarBg: "bg-pink-500",
  navbarText: "text-white",
  navbarHover: "hover:text-red-300",
  mobileMenuBg: "bg-gray-700",
  mobileMenuHover: "hover:bg-gray-600",
  
  // Footer
  footerBg: "bg-pink-400",
  footerText: "text-black",
  footerSubText: "text-black",
  footerBorder: "border-red-400",
  footerCopyText: "text-gray-200"
};

// Function to create dynamic header based on page title
function renderHeader(title, subtitle = "Change your mindset, change your world!") {
  return `
    <header class="${colors.headerBg} ${colors.headerText} py-6 text-center shadow-md">
      <h1 class="text-3xl sm:text-4xl font-bold">${title}</h1>
      <p <header class="${colors.subText} mt-2 text-sm sm:text-base">${subtitle}</p>
    </header>
  `;
}

// Navbar
const navbar = `
<nav class="${colors.navbarBg} ${colors.navbarText} shadow-md">
  <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
    <div></div>
    <!-- Hamburger for mobile -->
    <button id="nav-toggle" class="block md:hidden focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
    <!-- Desktop Links -->
    <div id="nav-links" class="hidden md:flex justify-center flex-1 space-x-6">
      <a href="index.html" class="transition font-medium ${colors.navbarHover}">Home</a>
      <a href="about.html" class="transition font-medium ${colors.navbarHover}">About</a>
      <a href="products.html" class="transition font-medium ${colors.navbarHover}">Products</a>
      <a href="blog.html" class="transition font-medium ${colors.navbarHover}">Blog</a>
      <a href="contact.html" class="transition font-medium ${colors.navbarHover}">Contact</a>
    </div>
  </div>
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden ${colors.mobileMenuBg} py-4 px-4 grid grid-cols-3 gap-2 justify-center">
    <a href="index.html" class="${colors.mobileMenuHover} rounded py-2 text-center transition font-medium">Home</a>
    <a href="about.html" class="${colors.mobileMenuHover} rounded py-2 text-center transition font-medium">About</a>
    <a href="products.html" class="${colors.mobileMenuHover} rounded py-2 text-center transition font-medium">Products</a>
    <a href="blog.html" class="${colors.mobileMenuHover} rounded py-2 text-center transition font-medium">Blog</a>
    <a href="contact.html" class="${colors.mobileMenuHover} rounded py-2 text-center transition font-medium">Contact</a>
  </div>
</nav>
`;

// Footer
const footer = `
<footer class="${colors.footerBg} ${colors.footerText} mt-auto">
  <div class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- About -->
    <div class="text-center md:text-left">
      <h3 class="text-xl font-bold text-white mb-2">Joanne Project You</h3>
      <p class="${colors.footerSubText} text-sm">Elevate your wellness with Joanne Project You.</p>
    </div>
    <!-- Contact / Social -->
    <div class="text-center md:text-right">
      <h4 class="font-semibold text-white mb-2">Connect</h4>
      <p class="${colors.footerSubText} text-sm mb-2">Email: info@joanneprojectyou.com</p>
      <p class="${colors.footerSubText} text-sm mb-4">Phone: +1 234 567 890</p>
      <div class="flex justify-center md:justify-end space-x-4">
        <a href="https://www.instagram.com/joanneprojectyou" class="hover:text-white transition">🌐-Insta</a>
        <a href="https://www.tiktok.com/@joanneprojectyou" class="hover:text-white transition">🐦-TikTok</a>
        <a href="https://www.facebook.com/jo.davis.5268" class="hover:text-white transition">📘-FaceBook</a>
      </div>
    </div>
  </div>
  <div class="border-t ${colors.footerBorder} mt-6 py-4 text-center ${colors.footerCopyText} text-sm">
    &copy; 2025 Joanne Project You. All rights reserved.
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Full-height layout
  document.body.classList.add("min-h-screen", "flex", "flex-col");

  // Dynamic header based on page title
  const pageTitle = document.title.replace(" - Joanne Project You", "");
  const headerSubtitle = "Change your mindset, change your world!";
  if (document.getElementById("header")) {
    document.getElementById("header").innerHTML = renderHeader(pageTitle, headerSubtitle);
  }

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
