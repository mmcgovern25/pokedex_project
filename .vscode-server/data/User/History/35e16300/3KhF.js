/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/list_generator_examiner.js";

const listItem = (content) => {
  return `<li class="list-group-item">${content}</li>`;

  // TODO: return the proper <li> HTML tag with its content (as a string)
};

const unorderedList = (items) => {
  let allItems = '';
  items.forEach((element) => {
    allItems += listItem(element);
  });

  let itemslist = `<ul class="list-group">${allItems}</ul>`;
  return itemslist;
};

const everything = allItems += listItem
// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    let itemslist = `<ul class="list-group">${allItems}</ul>`;
    return itemslist;
  });
};

runChallenges(listItem, unorderedList); // Do not remove.
export { listItem, unorderedList };
