export default links => `
<nav>
  <li class="fas fa-bars"></li>
  <ul class="hidden--mobile nav-link" id = "nav">
  ${links
    .map(
      link =>
        `<li><a class="menu-items" href="/${link.title}">${link.text}</a></li>`
    )
    .join("")}
  </ul>
  </nav/> `;
