export { makeMenu };
import { deleteContent } from "./deleteContent";
import { app } from "./main";

const section = document.createElement("section");
section.classList.add("menu-page");

const pizzaContainer = document.createElement("div");
pizzaContainer.classList.add("pizzas-container");
pizzaContainer.append(
  createPizza("/salami-pizza.jpg", "salami pizza."),
  createPizza("/leaf-yogurth-pizza.jpg", "leaf yogurth pizza."),
  createPizza("/tomato-pizza.jpg", "tomato pizza."),
  createPizza("/sauce-pizza.jpg", "strawberry sauce pizza."),
  createPizza("/vegetables-pizza.jpg", "vegetables pizza."),
  createPizza("/smoll-pizza.jpg", "smoll pizza.")
);

const header = document.createElement("h1");
header.ariaLabel = "menu.";
header.textContent = "Menu";

section.append(header, pizzaContainer);

function makeMenu() {
  deleteContent();
  app.append(section);
}

function createPizza(src, alt) {
  const pizza = document.createElement("img");
  pizza.classList.add("pizza-image");
  pizza.src = src;
  pizza.alt = alt;

  return pizza;
}
