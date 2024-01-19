<script>
    import { atRule } from 'postcss';

  /** @type {import('./$types').PageData} */
  export let data;

  function split_key(key, pos_in_key){
    let value = key.split(",")
    return key[pos_in_key]
  }
</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
    <article>
      {#each Object.entries(item) as [key,value]}
        <article>>
          {key}: {value}
        </article>
      {/each}
    </article>
    {/each}
  </div>
</main>

 
