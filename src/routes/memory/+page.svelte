<script>
  function flip(card) {
    if (!card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      card.flipped = true;
      flipcount += 1;
      flipped_cards.push(card);
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          if (flipped_cards[0].id == flipped_cards[1].id){
            flipped_cards[0].completed = true
            flipped_cards[1].completed = true
            if (active_player == "blue"){
              blue_player += 1
            }
            else if (active_player == "red"){
              red_player += 1
            }
            console.log(active_player)
          }
          cards = cards;
          flipped_cards = []
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          if (active_player == "blue") {
            active_player = "red"
            console.log(active_player, "1")
          } else if (active_player == "red") {
            active_player = "blue"
            console.log(active_player, "2")
          }
          
        }, 1000);
      }
      console.log(cards)
      cards = cards;

    } else {
      alert("chill");
    }
  } 

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let cards = [];
  let flipped_cards = []
  let flipcount = 0  
  let red_player = 0;
  let blue_player = 0;
  let active_player = "blue"
  let images = ["Image_1.jpg", "Image_2.jpg", "Image_3.jpg", "Image_4.jpg", "Image_5.jpg", "Image_6.jpg",
                "Image_1.jpg", "Image_2.jpg", "Image_3.jpg", "Image_4.jpg", "Image_5.jpg", "Image_6.jpg" ]


  function StartUp(){
    cards = [];
    flipped_cards = []
    flipcount = 0  
    red_player = 0;
    blue_player = 0;
    active_player = "blue"

    for (let index = 0; index < 6; index++) {
      cards.push({
        id: index,
        img: images[index], // TODO: unique images per card card
        flipped: false,  // TODO: think
        completed: false,
      });

      cards.push({
        id: index,
        img: images[index], // TODO: unique images per card card
        flipped: false,  // TODO: think
        completed: false,
      });
    }

    shuffleArray(cards)
  }
  StartUp()
</script>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>

  <div id="red-box" class="box"> <p>{red_player}</p> </div>
  <div id="blue-box" class="box"> <p>{blue_player}</p> </div>
  <div id="turn-box" class="box" style={active_player=="blue" ? "right: 10px;":"left:10px"}> </div>

  <div class="box" style="bottom: 0px;">
    <button type="button" style="width: 50px; height: 50px;" on:click={StartUp}> Reset</button>
  </div>

</main>


<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(4, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }

  .box{
    width: 100px;
    height: 100px;
    position: fixed;
    text-align: center;
    font-size: 30px;
  }

  #red-box, #blue-box{
    bottom: 0px;
    z-index: 2;
    width: 100px;
    height: 100px;
  }

  #red-box{
    background-color: red;
    left: 0px;
  }

  #blue-box{
    background-color: blue;
    right: 0px;
  }

  #turn-box {
    bottom: 10px;
    z-index: 1;
    background-color: greenyellow;
    box-shadow: 0 0 20px 20px greenyellow;
  }
</style>
