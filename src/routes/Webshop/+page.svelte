<script>
    let wares =  [
        {id:"Sixten", image:"sixten.jpg", price:0.81, disc:"Sixten är en 9 år gammal fotbolls-intresserad kille som har potential"}, 
        {id:"Kasper", image:"kasper.PNG", price:0.032, disc:"Kasper är 17 år gammal, tävlar i kampsport och saknar potential"},
        {id:"Kajsa", image:"", price:0.00025, disc:"Ginger, Kvinna, förtids-pansionerad och inga framgångar"},
        {id:"Jakob", image:"", price:0.00019, disc:"183 cm lång, beroende av Unmatched Legends"},
        {id:"Vidar", image:"Vidar.PNG", price:0.00023, disc:"185 cm lång, beroende av Unmatched Legends"},
        {id:"Leo", image:"", price:0.005, disc:"Ginger, saknar själ, välhängd och kräver bärhjälp på toaletten"},
        {id:"Melker", image:"", price:69, disc:"Geni, stor potential och en svärmorsdrömm"}]
    let shoppingList = []
    
    function checkIp(){
        let ip = document.getElementById("ip").value
        if (ip != "")
        {
            return true
        }
        return false
    }
    function buyItem(index){
        shoppingList.push(wares[index])
        shoppingList = shoppingList
        totalPrice()
    }
    function removeItem(index){
        shoppingList.pop(shoppingList[index])
        shoppingList = shoppingList
        totalPrice()
    }
    function checkout(){

        let cont = document.getElementsByClassName("container")
        let degree = 0
        if (checkIp()){
            setInterval(()=>{cont[0].style.transform = "rotate("+degree+"deg)"; degree += Math.floor(Math.random()*30 + 30)}, 5)
            alert("checked Out")
        }
        else{
            alert("You need to give your ip adress :)")
        }

    }
    function totalPrice(){
        let totalPrice = 0
        for (let item of shoppingList){
            totalPrice += item.price
        }
        TOTPrice = totalPrice
    }
    let TOTPrice = 0
</script>

<div class="container">
    <div class="window">
        <div class="window wares" style="height: 100%; border-color: #331D2C">
            {#each wares as item, index}
            <div class="item">
                <div style="margin-left: 5px;">{item.id}</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap 10px;">
                    <div style="margin: 10px 10px 10px 10px"><img src="{item.image}" alt="product"></div>
                    <div class="description">{item.disc}</div>
                </div>
                <div class="buy_button">
                    <div style="display: grid; grid-template-columns: 3fr 1fr;">
                        <div style="margin-left: 10px; margin-top:5px; width: 90%">{item.price} bitcoin</div>
                        <button style="margin-top: 5px; width: 100%" on:click={()=>(buyItem(index))}>buy</button>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
    <div class="window">
        <div class="window cart" style="height: 100%; border-color: #331D2C">
            {#each shoppingList as item, index}
            <div class="item">
                <div style="margin-left: 5px;">{item.id}</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap 10px;">
                    <div style="margin: 10px 10px 10px 10px"><img src="{item.image}" alt="product"></div>
                    <div class="description">{item.disc}</div>
                </div>
                <div class="buy_button">
                    <div style="display: grid; grid-template-columns: 3fr 2fr;">
                        <div style="margin-left: 10px; margin-top:5px; width: 80%">{item.price} bitcoin</div>
                        <button style="margin-top: 5px; width: 100%" on:click={()=>(removeItem(index))}>remove</button>
                    </div>
                </div>
            </div>
            {/each}
            
        </div>
        <div class="checkoutButton">
            <div style="display: grid; grid-template-columns: 3fr 2fr;">
                <div style="margin-left: 10px; margin-top:10px; width: 90%">Total Price: {TOTPrice}</div>
                <button style="margin-top: 10px" on:click={()=>(checkout())}>Check Out</button>
                <input style="margin-top: 10px; " id="ip" type="text">
            </div>

        </div>
    </div>
</div>

<style>
    .container{
        width: 100vw;
        height: 96vh;
        margin: auto;
        border-width: 10px;
        border-style: solid;
        border-color: #3F2E3E;
        background-color: #3F2E3E;
        padding-top: 10px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 10px;
        
    }
    .window{
        border-color: #22092C;
        border-width: 10px;
    }
    .wares{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 10px;
        background-color: #331D2C;
    }
    .cart{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 10px;
        background-color: #331D2C;
    }
    .item{
        border-color: black;
        border-width: 5px;
        background-color: #A78295;
    }
    img{
        width:100px;
        height: 100px;
    }
    .description{
        font-size: small;
    }
    .buy_button{
        width: 90%;
        height: 6vh;
        margin: auto;
        background-color: rgb(136, 136, 255);
        border-width: 3px;
        border-color: black;
    }
    .checkoutButton{
        position: fixed;
        margin-top: -80px;
        height: 80px;
        width: 484px;
        background-color: #3F2E3E;
        border-width: 5px;
        border-color: black;
    }


</style>