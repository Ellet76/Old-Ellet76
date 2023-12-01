<script>
    import { Input } from "postcss";


</script>

<div class="container">
    <h1 class="text">
        Todo
    </h1>
    <div class="layout">
        <div style="display: grid">
            <h1 class="text">New</h1>
            <ol>
                <li>objekt 1</li>
                <li>objekt 2</li>
            </ol>
            <input type="text">
        </div>
        <div style="display: grid;">
            <h1 class="text">Done</h1>
            <input type="text">
        </div>
    </div>
</div>

<style>
    .container{
        width: 80vw;
        height: 70vh;
        background-color: beige;
        border-width: 10px;
        border-style: solid;
        border-color: black;
        padding-top: 10px;
    }

    .layout{
        display: grid;
        width: 100%;
        grid-template-columns: 50% 50%;
    }
    .text{
        padding-left: 20px;
    }

    ol{
        list-style-type: upper-roman;
    }

    input:focus{
        border-color: black;
        background-color: beige;
    }
    input{
        transition: border-color 0.5s, background-color 0.5s;
        max-height: 20px;
    }

</style>