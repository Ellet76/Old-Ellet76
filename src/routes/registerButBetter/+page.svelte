<script>
    

    let username = "";
    let password;
    let letterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
    let letters = []
    let currentPos = 0
    let left = 35
    let top = 50

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
        left = 35 + (currentPos%9)*130
        top = 50 + Math.floor(currentPos/9)*130
        console.log(currentPos)
        if (Math.floor(currentPos/9)>=4)
        {
            left = 35
            top = 50
            currentPos = 0
        }
    }
    function chooseLetter()
    {
        username = username + letters[currentPos]
    }
</script>



<div class="bigContainer">
    <h1>Registration form</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <div>|{username}|</div>
        <input id="password" type="text" placeholder="password" bind:value={password}>
    </form>
    <button on:click={()=>{currentPos += rollDice(1, 6); movePlayer()}}>Roll Dice</button>
    <button on:click={()=>{chooseLetter()}}>Choose Letter</button>
    <button on:click={()=>{username=""}}>Reset</button>
    <button on:click={()=>{alert("Wohoo! You did it!\nSurely you didn't click the login button without a username? \n🛺")}}>Login</button>
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
</div>


<style>
    .bigContainer{
        text-align: center;
    }
    .cont{
        width: 1190px;
        height: 525px;
        margin: auto;
        margin-top: 20px;
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
</style>