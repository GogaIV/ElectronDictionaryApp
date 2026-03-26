class Node{
  children = [];
  end = false;
}

export class WordDictionary{
  #root;

  constructor(){
    this.#root = Node();
  }

  addWord(word){
    let curr = this.#root;
    const a = 'a';

    for (let i = 0; i < word.length; i++){
      idx = word.charCodeAt(0) - a.charCodeAt(0);
      if (!curr.children[idx]){
        curr.children[idx] = new Node();
      }
      curr = curr.children[idx];
    }
    curr.end = true; 
  }

  search(word){
    curr = this.#root;
    res = []

    for (let i = 0; i < word.length; i++){

    }
    return res; 
  }

} 