import { showGridView } from "./makeGridView.js";
import { showListView } from "./makeListView.js";

export function changeView(target) {
  const grid_btn = document.getElementById("grid-btn");
  const list_btn = document.getElementById("list-btn");

  if (target === "grid") {
    const view = document.querySelector(".list-view");
    grid_btn.src = "../assets/icons/grid-view-clicked.svg";
    list_btn.src = "../assets/icons/list-view.svg";
    view.classList.remove("list-view");
    view.classList.add("grid-view");
    showGridView();
  } else {
    const view = document.querySelector(".grid-view");
    grid_btn.src = "../assets/icons/grid-view.svg";
    list_btn.src = "../assets/icons/list-view-clicked.svg";
    view.classList.remove("grid-view");
    view.classList.add("list-view");
    showListView();
  }
}
