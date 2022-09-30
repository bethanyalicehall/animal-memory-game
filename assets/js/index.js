


  const cards = document.querySelectorAll('.memory-card');
  const fcards = document.querySelectorAll('.fact-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  //let pairs = 0;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    
    
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
   // pairs ++
    //if (pairs === 8) {
    //  gameOver();
    //}
    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));

  //function winAlert() {

   // $(`<section class="game-over"><div class="message-box"><h2>Yay! You have found all pairs!</h2><p>Number of attempts: ${attempts}</p><p>Time required: ${showMinutes}:${showSeconds} </p><p>Level: ${stars} </p><p><i class="fas fa-undo"></i></p></div></section>`).insertAfter($('.game'));

    //$('.message-box').fadeIn(1000);
  //};


  /////////////////////////////////////////////////////

 

  function flipTheCard() {
    this.classList.toggle('flip');
  }
  fcards.forEach(fcard => fcard.addEventListener('click', flipTheCard));
  