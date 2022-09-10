export { makeHome };
import { deleteContent } from "./deleteContent.js";
import { app } from "./main.js";

const section = document.createElement("section");
section.classList.add("home-page");

const image = document.createElement("img");
image.src = "/restaurant-page/hot-food-icon.png";
image.classList.add("food-icon");
image.alt = "hot apple pie.";

const header = document.createElement("h1");
header.classList.add("header-main");
header.textContent = "Bon apetit";

const paragraph = document.createElement("p");
paragraph.classList.add("description-main");
paragraph.textContent = "Premium Quality Pies";

section.append(image, header, paragraph);

function makeHome() {
  deleteContent();
  app.append(section);
}
