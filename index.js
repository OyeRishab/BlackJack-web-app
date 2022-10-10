const modal = document.getElementById("modal");
const start_btn = document.getElementById("start-btn");

const bust_modal = document.getElementById('bust-modal');

const cards_points = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 'j':10, 'q':10, 'k':10};

const suit_pos = {'hearts': 150, 'diamonds': 2100, 'clubs': 4050, 'spades': 6000};
const cards_pos = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 'j':11, 'q':12, 'k':13};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
let user_card_container = document.getElementById('user_card_container');
let bot_card_container = document.getElementById('bot_card_container');

let user_hit = 1;

let user_cards = [];
let bot_cards = [];

let user_points = 0;
let bot_points = 0;

function calc_user_points(){
  user_points=0;
  for (let i=0; i<user_cards.length; i++){
    user_points += cards_points[user_cards[i]];
  }
  document.getElementById('upoints').innerText = `Points : ${user_points}`
}

function calc_bot_points(){
  bot_points=0;
  for (let i=0; i<bot_cards.length; i++){
    bot_points += cards_points[bot_cards[i]];
  }
  document.getElementById('bpoints').innerText = `Points : ${bot_points}`
}

function user_new_card(){
  if (user_points<21 && user_hit==1){
    let card = cards[Math.floor(Math.random()* 13)];
    user_cards.push(card);
    let suit = Math.floor(Math.random() * 4);
    
    let card_pos = (suit_pos[suits[suit]] + (cards_pos[card]-1)*150)*-1;
    
    let newCard = document.createElement('div');
    newCard.setAttribute('id', `${user_cards.length+1}`);
    newCard.setAttribute('class', 'card');
    user_card_container.appendChild(newCard);
    
    document.getElementById(`${user_cards.length+1}`).style.backgroundPositionX=`${card_pos}px`;
    calc_user_points();
    if (user_points>21){
      setTimeout(function(){bust_modal.style.display = 'block';}, 500)
    }
    else if(user_points==21){
      
      setTimeout(function(){document.getElementById('bj-modal').style.display = 'block';}, 500)
    }
  }
  else{}
}

function bot_new_card(){
  if(bot_points<17){
    let bcard = cards[Math.floor(Math.random()* 13)];
    bot_cards.push(bcard);
    let bsuit = Math.floor(Math.random() * 4);
  
    let bcard_pos = (suit_pos[suits[bsuit]] + (cards_pos[bcard]-1)*150)*-1;
    
    let bnewCard = document.createElement('div');
    bnewCard.setAttribute('id', `b${bot_cards.length+1}`);
    bnewCard.setAttribute('class', 'card');
    bot_card_container.appendChild(bnewCard);
  
    document.getElementById(`b${bot_cards.length+1}`).style.backgroundPositionX=`${bcard_pos}px`;  
    calc_bot_points();
    if (bot_points>user_points&&user_hit==0&&bot_points<=21){
      setTimeout(function(){document.getElementById('loose-modal').style.display = 'block';}, 500)
    }
    else if(bot_points>21&&user_points<=21&&user_hit==0){
      setTimeout(function(){document.getElementById('win-modal').style.display = 'block'}, 500)
    }
    else if(bot_points==17&&bot_points>user_points&&user_hit==0){
      setTimeout(function(){document.getElementById('loose-modal').style.display = 'block';}, 500)
    }
    else if(bot_points==17&&user_points>bot_points&&user_hit==0){
      setTimeout(function(){document.getElementById('win-modal').style.display = 'block'}, 500)
    }
    else if(user_points==bot_points&&user_points<21&&user_hit==0){
      setTimeout(function(){document.getElementById('win-modal').style.display = 'block'}, 500)
    }
    
  }
}

let stay_btn = document.getElementById('stay')
stay_btn.addEventListener('click', function(){
  user_hit=0;
  setTimeout(bot_new_card, 500);
  setTimeout(bot_new_card, 1000);
  setTimeout(bot_new_card, 1500);
  setTimeout(bot_new_card, 2000);
  setTimeout(bot_new_card, 2500);
  setTimeout(bot_new_card, 3000);
})

start_btn.addEventListener('click', function(){
  modal.style.display = 'none';
  setTimeout(bot_new_card, 1000);
  setTimeout(user_new_card, 2000);
  setTimeout(user_new_card, 3000);
  setTimeout(function(){document.getElementById('button-modal').style.display = 'block';}, 3000)
})



