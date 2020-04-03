export default links => `
<nav>
  <li class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-link" id = "nav">
  ${links
    .map(
      link =>
        `<li><a class="menu-items" href="/${link.title}">${link.text}</a></li>`
    )
    .join("")}
  </ul>
  </nav/> `;
//       `<li><a class="active"><a href="#" class="menu-items">Home</a></li>
//       <li><a class="active"><a href="#" class="menu-items">Cities</a></li>
//       <li><a class="active"><a href="#" class="menu-items">About</a></li>
//       <li><a class="active"><a href="#" class="menu-items">Gallery</a></li>
//       <li><a class="active"><a href="#" class="menu-items">About</a></li>
//       <li><a class="active"><a href="#" class="menu-items">Contact</a></li>
//       <li><a class="active"><a href="#" class="menu-items">More</a></li>
