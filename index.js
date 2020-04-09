import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
console.log(state);
const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st = state.Home) {
  console.log("rendering state", st);
  document.querySelector("#root").innerHTML = `

  ${Nav(state.Links)}
  ${Main(st)}
  ${Header(st)}
  ${Footer()}

`;

  router.updatePageLinks();
  addNavEventListeners();
}

function addNavEventListeners() {
  // console.log("screen");
  // Array.from(document.getElementsByClassName("menu-items")).forEach(navLink =>
  //   navLink.addEventListener("click", event => {
  //     event.preventDefault();
  //     console.log("nav.Click", event.target);
  //     render(state[event.target.title]);
  //   })
  // );
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("li > ul").classList.toggle("hidden--mobile")
    );
}
// document.getElementsByClassName("btn").addEventListener("click", function() {
//   document.getElementByClassName("btn").innerHTML = "CHOOSE A CITY";
// });
