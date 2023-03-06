"use strict";

const numberOfIgnited = 7;

const visibleBranchs = document.querySelectorAll(
  ".christmas-tree__branch:not(.christmas-tree__branch_invisible)"
);

setInterval(() => {
  for (let index = 0; index < visibleBranchs.length; index += 1) {
    visibleBranchs[index].classList.remove("christmas-tree__branch_ignited");
  }

  for (let index = 0; index < numberOfIgnited; index += 1) {
    visibleBranchs[
      Math.floor(Math.random() * visibleBranchs.length)
    ].classList.add("christmas-tree__branch_ignited");
  }
}, 1000);
