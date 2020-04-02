export default links => `
<nav>
  <li class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-link" id = "nav">
  <a href="#">Home</a></li>
  ${links.reduce(
    (html, link) =>
      html +
      `li><a href="#">Gallery</a></li>
      <li><a href="#">Cities</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">More</a></li>
      link.title
  }" data-navigo>${link.text}</a></li`,
    ``
  )}
  </ul>
  </nav> `;
