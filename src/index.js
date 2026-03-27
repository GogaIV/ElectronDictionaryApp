// import { WordDictionary } from "./components/wordDict.js";

let wordDict = [];

fetch("./words.txt")
  .then((r) => r.text())
  .then((text) => {
    wordDict = text.split("\n");

    // Im commenting this out when testing cuz load takes too long
    // Must find way to save into mem after make trie tree

    displayWords(wordDict);
    // displayWords(["hello", "and", "test", "no", "yes"]);
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

const idx = 0

function displayWords(words, idx = 0) {
  wordDisplay.innerHTML = words.slice(idx, idx + 20).map((word) => `<p>${word}</p>`).join("");
}

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const wordDisplay = document.querySelector("#wordDisplay");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    const res = search(wordDict, query);
    if (res.length == 0){
      wordDisplay.innerHTML = `<p>No Result Found</p>`;  
    } else {
      wordDisplay.innerHTML = res.map((word) => `<p>${word}</p>`).join("");
    }
  } else {
    displayWords(wordDict);
  }
});
