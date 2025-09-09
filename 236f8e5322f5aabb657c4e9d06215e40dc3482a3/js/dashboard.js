// Load all sections
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("tab-products");
  renderBlog("tab-blog");

  // About
  const about = document.getElementById("tab-about");
  about.innerHTML = `
    <h2 class="font-bold text-xl mb-2">About Jo Meal Plans</h2>
    <p class="text-gray-700">We are committed to helping you achieve a healthier lifestyle with meal plans and supplements.</p>
  `;

  // Contact
  const contact = document.getElementById("tab-contact");
  contact.innerHTML = `
    <h2 class="font-bold text-xl mb-2">Contact Us</h2>
    <form class="space-y-4">
      <input type="text" placeholder="Name" class="w-full border rounded p-2">
      <input type="email" placeholder="Email" class="w-full border rounded p-2">
      <textarea placeholder="Message" class="w-full border rounded p-2"></textarea>
      <button type="submit" class="bg-gray-900 text-white px-4 py-2 rounded">Send</button>
    </form>
  `;

  // Tabs toggle
  const buttons = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      tabs.forEach(tab => tab.classList.add("hidden"));
      document.getElementById(target).classList.remove("hidden");
    });
  });
});
