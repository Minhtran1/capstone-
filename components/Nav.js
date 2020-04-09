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

//   <nav>
//   <div class="logo">
//       <h4>Marco Polo</h4>
//   </div>
//   <ul class="nav-links" id="nav-links">
//       ${links.map(link => `<li><a href="#" aria-label=${link.text}>${link.title}</a></li>`).join('')}
//   </ul>
//   <div class="burger">
//       <div class="line1"></div>
//       <div class="line2"></div>
//       <div class="line3"></div>
//   </div>
// </navnav>`
