<script>
    import { fade, fly } from 'svelte/transition';
  
    // Define parallax layers
    const layers = ["/Image_2-removebg.jpg", "/Random_pixelart_1.png"];
  
    // Define messages for scrollytelling
    const messages = [
      'Keep scrolling...',
      'More scrolling...',
      'Almost there...',
      'You did it!',
      "hohohoho",
      "I am evil",
      "Not really",
      "Im just lonely",
      "Though...",
      "I might be evil😎",
      "🥐🥐🥐🥐🥐🥐🥐🥐🥐🥐🥐",
      "🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺"];
  
    // Initialize scroll position, message index, and fader
    let y = 0;
    let currentMessageIndex = 0;
    let fader = true;
    $: currentMessage = messages[currentMessageIndex];
    // Calculate the step size for message changes
    const step = Math.floor(4400 / messages.length);

    // Function to handle scroll events
    function handleScroll() {
      const tempIndex = currentMessageIndex;
  
      // Update the message index based on scroll position
      currentMessageIndex = Math.max(0,Math.floor(y / step));
  
      // Update the fader state based on message change
      fader = currentMessageIndex === tempIndex;
    }

    function findIndex(array, object){
      // Base 1
      return array.indexOf(object) + 1
    }
  </script>
  
  <svelte:window bind:scrollY={y} on:scroll={handleScroll} />
  
  <main>
    <!-- Parallax container for layers -->
    <div class="container">
      {#each layers as image}
        <p>{image, findIndex(layers, image)}</p>
        <img
          style="transform: translate(0, {y < 2 ? y * findIndex(layers, image) : -y * findIndex(layers, image) / (layers.length - 1)}px) "
          src={image}
          alt={`parallax layer ${findIndex(layers, image)}`}
        >
      {/each}
    </div>
  
    <!-- Scrollytelling text section -->
    <div class="text">
        {#if fader && currentMessageIndex > 0}
          <!-- Animate text with fly-in and fade-out transitions -->
            <div class="story" in:fly={{ y: 200, duration: 0 }} out:fade>
                <p>You have scrolled {y} pixels</p>
                <p>{currentMessage}</p>
                <img src="/Image_5.jpg" alt="hmmmmmm"> 
            </div>
          {:else if currentMessageIndex === 0 }
          <p>You have scrolled {y} pixels</p>
          <p>{currentMessage}</p>
        {/if}
    </div>
  </main>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
    }
  
    main {
      height: 5000px;
      background-image: url("/Image_4_but_black.jpg");
      background-size: contain;
    }
 
    .story img{
        width:300px;
        bottom:0;
    }
  
    .container {
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden; /* Clip overflow for parallax effect */
    }
  
  
    .container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
    }
  
    .text {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 1;
      width: 100%;
      color: white;
    }
  </style>
  