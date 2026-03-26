class Node{
  children = [];
  end = false;
}

export class WordDictionary{
  #root;

  constructor(){
    this.#root = new Node();
  }

  addWord(word){
    let curr = this.#root;
    const a = 'a';

    for (let i = 0; i < word.length; i++){
      let idx = word.charCodeAt(i) - a.charCodeAt(0);
      if (!curr.children[idx]){
        curr.children[idx] = new Node();
      }
      curr = curr.children[idx];
    }
    curr.end = true; 
  }

  search(word){
    let curr = this.#root;
    let res = []

    for (let i = 0; i < word.length; i++){

    }
    return res; 
  }

} 