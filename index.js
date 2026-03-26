const wordDict = ["and", "or", "not"]

function search(dict, word){
  let res = [];
  for (let i = 0; i < dict.length; i++){
    if ((dict[i].include(word) && dict[i].length > word.length) || (dict[i] === word)){
      res.push(dict[i])
    }
  }
  return res;
}



var searchInput; 
const searchButton = document.querySelector("#searchButton"); 

const wordDisplay = document.querySelector("#wordDisplay")

// for (let i = 0; i < wordDict.length; i++){
//   wordDisplay.innerHTML += `<p>${wordDict[i]}</p>`;
// }



