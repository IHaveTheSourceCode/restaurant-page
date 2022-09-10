import "./style.css";
import { makeHome } from "./makeHome.js";
import { makeMenu } from "./makeMenu";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", makeHome);
menu.addEventListener("click", makeMenu);

export const app = document.querySelector("#app");
