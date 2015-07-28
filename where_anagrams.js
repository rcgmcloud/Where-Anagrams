function anagrams(word, words) {
  var w = word.split("").sort().join("");
  var sort = [];
  var pass = [];

  for (var i=0; i<words.length; i++){
    sort[i] = words[i].split("").sort().join("");
  }

  function test(x, y){
    for(var i = 0; i< y.length; i++){
      if(x.charAt(i) !== y.charAt(i)){
        return false;
      }
    }
    return true;
  }

  for(var j=0; j<sort.length; j++){
    if(test(w,sort[j])){
      pass.push(words[j]);
    }
  }

  return pass;
}