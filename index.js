const wordDict = ["and", "or", "not"];

function search(dict, word) {
  let res = [];
  for (let i = 0; i < dict.length; i++) {
    if (
      (dict[i].include(word) && dict[i].length > word.length) ||
      dict[i] === word
    ) {
      res.push(dict[i]);
    }
  }
  return res;
}

const searchInput = document.querySelector("#searchInput"); 
const searchButton = document.querySelector("#searchButton");
const wordDisplay = document.querySelector("#wordDisplay");

for (let i = 0; i < wordDict.length; i++) {
  wordDisplay.innerHTML += `<p>${wordDict[i]}</p>`;
}

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    const res = search(wordDict, query);
    wordDisplay.innerHTML = res.map((word) => `<p>${word}</p>`).join("");
  } else {
    wordDisplay.innerHTML = wordDict.map((word) => `<p>${word}</p>`).join("");
  }
});
