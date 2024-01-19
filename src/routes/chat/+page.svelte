<script>
  import { enhance } from "$app/forms";
  import { saved_chat } from "$lib/stores";
  import "elizabot";
  import ElizaBot from "elizabot";
  let eliza = new ElizaBot();

  
  let chat = []

  function load_chat(){
    chat = $saved_chat
    chat = chat
    console.log(chat, $saved_chat)
  }

  async function write(message, user) {
    chat.push({user: user, text: message})
    var element = document.getElementById("visible")
    element.style.display = "flex"
    chat = chat

    let reply = eliza.transform(message)
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    element.style.display = "none"
    chat.push({user: "Elizabot", text: reply})
    chat = chat
    saved_chat.set(chat)
  }

  function reset(){
    chat = []
    chat = [{ user: "Elizabot", text: eliza.getInitial() }];
    chat = chat
  }
  
  load_chat()
</script>


<svelte:head>
  <link rel="stylesheet" href="/pico.min.css">
  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <article>
      {#each chat as msg, i}
        <div>{msg.text}</div>
        <div>{msg.user}</div>
        <div>{"_"}</div>
      {/each}
    </article>
    <article id="visible">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text, "User");
      // TODO: reset the form using form.reset()
      form.reset();
    }}
  >
   <input type="text" name="text"/>    
   <button type="button" name="button" on:click={reset}> Reset</button>
  </form>
  
</div>


<style>
  @keyframes typing {
    0% {transform: scale(1);}
    25%{transform: scale(1);}
    50% {transform: scale(1.4);}
    100% {transform: scale(1);}
  }

  .circle{
    animation-name: typing;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    width: 10px;
    height: 10px;
    padding: 5px;
    margin: 3px;
    border-radius: 50%;
    background-color: aliceblue;
  }

  .circle:nth-child(1) {
    animation-delay: 0ms; 
  }
  .circle:nth-child(2) {
    animation-delay: 333ms;
  }
  .circle:nth-child(3) {
    animation-delay: 666ms;
  }

  #visible {
    width: 100px;
    height: 60px;
    justify-content: center;
    align-items: center;
    display: none;
  }
</style>