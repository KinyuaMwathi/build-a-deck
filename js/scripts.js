$(document).ready(function() {
  const deck = [];
  const suits = ["hearts", "spades", "diamonds", "clubs"];
  const ranks = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push(`${rank} of ${suit}`);
    });
  });

  ul = document.createElement('ul');

  document.getElementById('hidden').appendChild(ul);

  deck.forEach(function (element) {
  let li = document.createElement('li');
  ul.appendChild(li);

  li.innerHTML += element;
  });

  $("#showDeck").click(function() {
    $("#hidden").toggle();
  });
});