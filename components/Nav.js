export default links => `
<nav>
  <div class="title">
    <h4>TRANSI</h4>
  </div>
  <ul class="hidden--mobile nav-link" id = "nav">
  ${links
    .map(
      link =>
        `<li><a class="menu-items" href="/${link.title}">${link.text}</a></li>`
    )
    .join("")}
  </ul>
  </nav> `;
