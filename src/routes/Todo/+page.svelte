<script>
    import { onMount } from "svelte";
    let not_Done = [];
    let done = []
    

    function Add()
    {
        const add = document.getElementById("task").value;
        not_Done = [...not_Done, add]
    }
    function RemoveFromNotDone(index)
    {
        not_Done = not_Done.filter((_, i) => i !== index);
    }
    function SetItemToDone(index)
    {
        done = [...done, not_Done[index]]
        not_Done = not_Done.filter((_, i) => i !== index);
    }
    function RemoveFromDone(index)
    {
        done = done.filter((_, i) => i !== index);
    }
    function SetItemToNotDone(index)
    {
        not_Done = [...not_Done, done[index]]
        done = done.filter((_, i) => i !== index);
    }
    onMount(() => {})
</script>

<div class="container">
    <h1 class="text">
        Todo list
    </h1>
    <div class="layout">
        <div style="display: grid">
            <h1 class="text">New</h1>
            
            <div class="submit">
                <input id="task" type="text">
                <button on:click={Add}>Submit</button>
            </div>

            <ol>
                {#each not_Done as item, index(item)}
                    <li>
                        <dir class="list">
                            {item}
                            <button id="list_button" on:click={() => SetItemToDone(index)}>Done</button>
                            <button id="list_button" on:click={() => RemoveFromNotDone(index)}>Remove</button>
                        </dir>
                    </li>
                {/each}
            </ol>
        </div>

        <div style="display: grid;">
            <h1 class="text">Done</h1>
            <ol>
                {#each done as item, index(item)}
                    <li>
                        <dir class="list">
                            {item}
                            <button id="list_button" on:click={() => SetItemToNotDone(index)}>Not Done</button>
                            <button id="list_button" on:click={() => RemoveFromDone(index)}>Remove</button>
                        </dir>
                    </li>
                {/each}
            </ol>
        </div>
    </div>
</div>

<style>
    .container{
        width: 98%;
        height: 85vh;
        background-color: beige;
        border-width: 10px;
        border-style: solid;
        border-color: black;
        padding-top: 10px;
        margin: auto;
    }

    .layout{
        display: grid;
        width: 100%;
        grid-template-columns: 50% 50%;
    }
    .list{
        display: grid;
        width: 90%;
        grid-template-columns: 3fr 1fr 1fr;
    }
    #list_button{
        width: 100%;
        text-align: center;
    }
    .submit{
        display: grid;
        width: 100%;
        grid-template-columns: 90% 10%;
        max-height: 20px;
    }

    .text{
        padding-left: 20px;
        max-height: 35px;
    }

    ol{
        list-style-type: upper-roman;
    }

    input:focus{
        border-color: black;
        background-color: rgb(185, 255, 245)
    }
    input{
        transition: border-color 0.5s, background-color 0.5s;
        max-height: 20px;
    }

</style>