// import { WordDictionary } from "./components/wordDict.js";

let wordDict = [];
let idx = 20
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const wordDisplay = document.querySelector("#wordDisplay");
const moreWordsButton = document.querySelector("#moreWordsButton");

fetch("./words.txt")
  .then((r) => r.text())
  .then((text) => {
    wordDict = text.split("\n");

    // Im commenting this out when testing cuz load takes too long
    // Must find way to save into mem after make trie tree

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
  wordDisplay.innerHTML = words
    .slice(0, idx)
    .map((word) => `<p>${word}</p>`)
    .join("");
}


moreWordsButton.addEventListener("click", () => {
  idx += 20;
  displayWords(wordDict, idx);
});

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();

  if (query) {
    const res = search(wordDict, query);
    document.getElementById("moreWordsButton").style.display = "none";
    if (res.length == 0) {
      wordDisplay.innerHTML = `<p>No Result Found</p>`;
    } else {
      wordDisplay.innerHTML = res.slice(0, 22).map((word) => `<p>${word}</p>`).join("");
    }
  } else {
    idx = 20; 
    displayWords(wordDict);
    console.log(idx);
    document.getElementById("moreWordsButton").style.display = "block";
  }
});
