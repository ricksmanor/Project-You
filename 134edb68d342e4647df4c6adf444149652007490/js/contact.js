function renderContact(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
      <form class="space-y-5">
        <div>
          <label class="block font-semibold mb-1">Name</label>
          <input type="text" required class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
        </div>
        <div>
          <label class="block font-semibold mb-1">Email</label>
          <input type="email" required class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
        </div>
        <div>
          <label class="block font-semibold mb-1">Message</label>
          <textarea rows="5" required class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
        </div>
        <button type="submit" class="w-full bg-red-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-red-700 transition">Send Message</button>
      </form>
    </div>
  `;
}
