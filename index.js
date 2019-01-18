var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
}
function prependKitten(name){
  newKittens = [...kittens];
  newKittens.unshift(name);
  return newKittens;
}
function removeLastKitten(){
  newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}
function removeFirstKitten(){
  newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}
