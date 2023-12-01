<script>
    let firstName;
    let lastName;
    let email;
    let password;
    let food;
    
function handleSubmit()
{
    //Handling form submit 
    console.log(firstName, lastName, email, password, food)
    console.log("heheheha")
}
</script>

<h1>Login form</h1>
<div class="formstyle">
    <form on:submit|preventDefault={handleSubmit}>
        <input id="email" type="text" placeholder="E-mail" bind:value={email}>
        <input id="password" type="text" placeholder="password" bind:value={password}>
        
        <button type="submit">Register</button>
    </form>
    <p>Dont have an Account? <a href="/register">Register</a></p>
</div>


<style>
    .formstyle{
        font: 90% Arial, Helvetica, sans-serif;
        margin: 2px auto;
    }
    form{
        display:grid;
        grid-template-columns: repeat(1, minmax(200px, 1fr));
        gap: 5px;
        width: 30vw;
        max-width: 400px;
        min-width: 200px; 
        margin: auto;
        background-color: rgb(200, 0, 0)
    }
    h1{
        margin: auto;
        margin-top: 50px;
        text-align: center;
        height: 100px;
        max-height: 70px;
        max-width: 400px;
        background-color: rgb(255, 127, 127);
        padding-top: 40px;
    }
    input{
        padding: 10px;
        margin: 10px;
    }
    p{
        text-align: center;
    }

</style>