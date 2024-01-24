<script>

  /** @type {import('./$types').PageData} */
  export let data;

  function checkType(vari) {
    if(typeof vari == "object"){
      return vari
    }
    else{
      return {"":vari}
    }
  }
  function fixColon(key){
    if(key == ""){
      return key
    }
    else{
      return key+": "
    }
  }

</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <div class="{data.params.category} general">
    {#each data.response as item}
    <article>
      <div class="header general">{item.id}</div>
      <l>
      {#each Object.entries(item) as [key,value]}
        <li class="grid {key}">
          <div>{key}: </div>
          <div class="grid2">
            {#each Object.entries(checkType(value)) as [key2, value2]}
              <div>{fixColon(key2)}</div>
              <div class="grid2">
                {#each Object.entries(checkType(value2)) as [key3, value3]}
                  <div>{fixColon(key3)}</div>
                  <div class={value3}>{value3}</div>
                {/each}
              </div>
            {/each} 
          </div>
        </li>
      {/each}
      </l>
    </article>
    {/each}
  </div>
</main>

<style>
  main{
    width: 100%;
  }
  article{
    width: 1350px;
  }
  
  
  .general{
    font-family: 'Courier New', Courier, monospace;
    color:aliceblue
  }
  .users{
    color: blue;
  }
  .addresses{
    color: green;
  }
  .banks{
    color: aqua;
  }


  .id{
    color: red;
  }
  .uid{
    color: red;
  }
  .password{
    color: red;
  }
  .city{
    color: red;
  }
  .account_number{
    color: red;
  }
  .Female{
    color: pink;
  }
  
  .grid{
    display: grid;
    grid-template-columns: 300px 1fr;
    margin: 5px;
  }
  .grid2{
    display: grid;
    grid-template-columns: 150px 1fr;
  }
  .header{
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
</style>

 
