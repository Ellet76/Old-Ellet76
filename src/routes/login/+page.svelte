<script>
    let email;
    let password;
    
function handleSubmit()
{
    //Handling form submit 
    console.log(email, password)
    console.log("heheheha")
}
</script>

<h1>Login form</h1>
<div>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="email">Email: </label>
        <input id="email" type="text" bind:value={email}>

        <label for="password">Password: </label>
        <input id="password" type="text" bind:value={password}>
        
        <button type="submit">Log in</button>
    </form>
    <div>
        <p>Dont have an Account? <a href="/register">Register</a></p>
    </div>
</div>

<style>
    form{
        display:grid;
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        max-width: 50%;
    }
</style>