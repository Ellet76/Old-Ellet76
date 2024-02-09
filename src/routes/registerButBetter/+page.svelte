<script>
    let username = "";
    let password;
    let letterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
    let letters = []
    let currentPos = -1
    let left = 35
    let top = -80

    for(let letter of letterString){
        letters.push(letter)
    }

    function randomIntFromInterval(min, max) // min and max included 
    { 
        //Generates a random INT
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function rollDice(min, max)
    {
        //Rolls Dice
        let number = randomIntFromInterval(min, max)
        console.log(number, currentPos)
        return number
    }

    function handleSubmit()
    {
        //Handling form submit 
        console.log(username, password)
        console.log("heheheha")
    }
    function movePlayer()
    {
        if(currentPos == -1){
            left = 35
            top = -80
        }
        else{
            left = 35 + (currentPos%9)*130
            top = 50 + Math.floor(currentPos/9)*130
            console.log(currentPos)
        }
        if (Math.floor(currentPos/9)>=4)
        {
            left = 35
            top = -80
            currentPos = -1
        }
    }
    function chooseLetter()
    {
        if(currentPos<0){
            alert("You cant choose this letter. Choose another.")
        }
        else{
            username = username + letters[currentPos]
        }
    }
</script>



<div class="bigContainer">
    <h1 class="title">Registration form</h1>
    <div class="username">{username}</div>
    <button class="button" on:click={()=>{currentPos += rollDice(0, 6); movePlayer()}}>Roll Dice</button>
    <button class="button" on:click={()=>{chooseLetter()}}>Choose Letter</button>
    <button class="button" on:click={()=>{username=""}}>Reset</button>
    <button class="button" on:click={()=>{alert(username==""?"Where's your username? :(":"Wohoo! You did it!\n🛺\nCongratulations "+ username); handleSubmit()}}>Login</button>
    <div class="cont">
        <div class="container">
            <div class="containerForGame">
                {#each letters as letter}
                    <div class="square">{letter}</div>
                {/each}
            </div>
            <div class="player" style="left:{left}px; top:{top}px"></div>
        </div>
    </div>
    <div class="start">
        <div class="start2">START</div>
    </div>
</div>


<style>
    .bigContainer{
        text-align: center;
    }
    .cont{
        width: 1190px;
        height: 540px;
        margin: auto;
        margin-top: 20px;
        padding: 15px;
        background-color: black;
    }
    .container{
        width: 1160px;
        height: 510px;
        margin: auto;
        position: relative;
    }
    .containerForGame{
        background-color: black;
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 10px;
        position: sticky;
        left: 0%;
        top: 0%;
    }
    .square{
        width: 1fr;
        height: 1fr;
        background-color: beige;
        text-align: center;
        font-size: large;
    }
    .button{
        width: 120px;
        height: 30px;
        margin: 3px;
        background-color: aquamarine;
        border: 3px solid black;
        
    }
    .username{
        height: 40px;
        width: 250px;
        margin: auto;
        font-size: larger;
    }
    .player{
        z-index: 1;
        left: 35px; /*+130*/
        top: 50px; /*+130*/
        height: 50px;
        width: 50px;
        background-color: black;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
    }
    .title{
        margin: auto;
        width: 300px;
        height: 40px;
        font-size: x-large;
    }
    .start{
        width: 145px;
        height: 140px;
        background-color: black;
        position: absolute;
        left: 173px;
        top: 36px;
        padding: 15px;
        z-index: 0;
    }
    .start2{
        width: 115px;
        height: 110px;
        margin: auto;
        background-color: beige;
        font-size: large;
        position: relative;
    }
    
</style>