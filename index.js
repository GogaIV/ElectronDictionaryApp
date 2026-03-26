import { WordDictionary } from "./wordDict";

let wordDict = [];

fetch("words.txt")
  .then((r) => r.text())
  .then((text) => {
    wordDict = text.split("\n");
    displayWords(wordDict);
  });


function search(dict, word) {
  let res = [];
  for (let i = 0; i < dict.length; i++) {
    if (
      (dict[i].includes(word) && dict[i].length > word.length) ||
      dict[i] === word
    ) {
      res.push(dict[i]);
    }
  }
  return res;
}

function displayWords(words) {
  wordDisplay.innerHTML = words.map((word) => `<p>${word}</p>`).join("");
}

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const wordDisplay = document.querySelector("#wordDisplay");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    const res = search(wordDict, query);
    wordDisplay.innerHTML = res.map((word) => `<p>${word}</p>`).join("");
  } else {
    wordDisplay.innerHTML = wordDict.map((word) => `<p>${word}</p>`).join("");
  }
});
