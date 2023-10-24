import Route from "./router/Route.js";
import Router from "./router/Router.js";
import Home from "./views/Home.js";
import Dom from "./views/Dom.js";
import HoverEffects from "./views/HoverEffects.js";

console.log("JS is loaded");

const routes = [
    new Route("/", new Home),
    new Route("/dom", new Dom),
    new Route("/CSS/:name", new HoverEffects),
];

const router = new Router(routes, document.getElementById("root"));

// Adding an event listener that selects all html elements with a route attribute,
// goes through the list and adds a event listener on click that calls Router.navigate on
// the specified route.
document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelectorAll("[route]").forEach((route) =>
    route.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        router.navigate(e.target.getAttribute("route"));
      })
  );
});

// I don't know what this does, but it calls navigate twice when you change pages
window.addEventListener("hashchange", (e) =>
  router.navigate(e.target.location.hash.substr(1))
);