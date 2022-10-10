let dealer_cards = []
let player_cards = []
let dealer_points = document.getElementById("dealer-points")
let player_points = document.getElementById("player-points")
dealer_points.innerText = "Points : 0"
player_points.innerText = "Points : 0"
let psum = 0
let dsum = 0
let pcash = 100
let dcash = 100

function newcard(){
  let card = Math.floor(Math.random()*11 + 1)
  if ((card+psum)<=21){
    psum += card
    player_cards.push(card)
    player_points.innerText="Points : " + psum
    display_cards()
  }
  else{
    document.getElementById("message-box").innerText = "You have a Bust! You Loose!"
    
  }
}

function dnewcard(){
  let card = Math.floor(Math.random()*11 + 1)
  dsum += card
  dealer_cards.push(card)
  dealer_points.innerText="Points : " + dsum
  console.log(dealer_cards)
}

function display_cards() {
  for (let i=0; i<player_cards.length; i++){
    id = "pdraw" + i
    document.getElementById(id).src = "images/" + player_cards[i] + ".png"
  }
}

function reset_cards(){
  for (let i=0; i<3; i++){
    id = "pdraw" + i
    document.getElementById(id).src = "images/card.png"
  }
  for (let i=3; i<6; i++){
    id = "pdraw" + i
    document.getElementById(id).src = "images/none.png"
  }
  for (let i=0; i<3; i++){
    id = "ddraw" + i
    document.getElementById(id).src = "images/card.png"
  }
  for (let i=3; i<6; i++){
    id = "ddraw" + i
    document.getElementById(id).src = "images/none.png"
  }
}

function start(){
  dealer_cards = []
  player_cards = []
  dealer_points.innerText = "Points : 0"
  player_points.innerText = "Points : 0"
  psum = 0
  dsum = 0
  document.getElementById("message-box").innerText = "Choose wether to Hit or Stay"
  reset_cards()
  dnewcard()
  document.getElementById("ddraw0").src = "images/" + dealer_cards[0] + ".png"
  setTimeout(() => {newcard();}, 1000);
  setTimeout(() => {newcard();}, 2000);
}


