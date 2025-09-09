function renderAbout(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <h2 class="text-3xl font-bold mb-4 text-center">Lorem Ipsum About Section</h2>
    <p class="text-gray-700 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </p>
    <p class="text-gray-700 leading-relaxed">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="text-gray-700 leading-relaxed">
      Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
    </p>
  `;
}
