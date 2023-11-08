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

<h1>Registration form</h1>
<div>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="firstName">First Name: </label>
        <input id="firstName" type="text" bind:value={firstName}>

        <label for="lastName">Last Name: </label>
        <input id="lastName" type="text" bind:value={lastName}>

        <label for="email">Email: </label>
        <input id="email" type="text" bind:value={email}>

        <label for="password">Password: </label>
        <input id="password" type="text" bind:value={password}>

        <label for="food">Favourite Food: </label>
        <input  id="food" type="text" bind:value={food}>
        
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