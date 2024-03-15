<script>
    import { onMount } from "svelte";
    let top = 0;
	let left = 1000;
    function checkOverlap(div1, div2) {
        
        const rect1 = div1.getBoundingClientRect();
        const rect2 = div2.getBoundingClientRect();
        
    return !(rect1.right < rect2.left+5 || 
             rect1.left > rect2.right-5 || 
             rect1.bottom < rect2.top+5 || 
             rect1.top > rect2.bottom-5);
    }
    function gameOVER(){
        const player = document.getElementById("player");
        const enemy = document.getElementById("enemy");
        if (checkOverlap(player, enemy)){
            alert("You lost! \n 🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺")
            left = 0
            top = 0
        }

    }

    function checkAllOverlap(){
        const player = document.getElementById("player")
        const enemy = document.getElementById("enemy")
        const div1 = document.getElementById("wall1")
        const div2 = document.getElementById("wall2")
        const div3 = document.getElementById("wall3")
        const div4 = document.getElementById("wall4")
        const div5 = document.getElementById("wall5")
        const div6 = document.getElementById("wall6")
 
        if (checkOverlap(player, div1) || checkOverlap(player, div2) || 
            checkOverlap(player, div3) || checkOverlap(player, div4) || 
            checkOverlap(player, div5) || checkOverlap(player, div6) ||
            checkOverlap(player, enemy))
            {
                return false
            }
        return true
    }

    function moveTowardsGoal(currentX, currentY, goalX, goalY, speed) {
        // Calculate the direction towards the goal
        const deltaX = goalX - currentX;
        const deltaY = goalY - currentY;

        // Calculate the distance to the goal
        const distanceToGoal = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // If the object is already at the goal, no need to move
        if (distanceToGoal === 0) {
            return { newX: currentX, newY: currentY };
        }

        // Calculate the unit vector towards the goal
        const unitX = deltaX / distanceToGoal;
        const unitY = deltaY / distanceToGoal;

        // Calculate the new position based on the speed and direction
        const newX = currentX + unitX * speed;
        const newY = currentY + unitY * speed;

        // Ensure that the object does not overshoot the goal
        
        if (Math.abs(goalX - newX) < speed && Math.abs(goalY - newY) < speed) {

            return { newX: goalX, newY: goalY };
        }
        
        return { newX, newY };
    }

	function onKeyDown(e) {

        if (checkAllOverlap()){
        switch(e.keyCode) {

            case 87: // W
            case 38: // up
                if (top!=0){
                    top -= 50;
                }
                break;
            case 83: // S
            case 40: // down
                if (top != 600){
                    top += 50;
                }
                break;
            case 65: // A
            case 37: // left
                if (left != 0){
                    left -= 50;
                }
                break;
            case 68: // D
            case 39: // right
                if (left != 1000){
                    left += 50;
                }
                break;
            }
        }
        gameOVER()
    }	
    const enemyStartX = 450
    const enemyStartY = 350
    const speed = 50
    let newPos = moveTowardsGoal(enemyStartX, enemyStartY, left, top, speed)
    setInterval(() => (newPos = moveTowardsGoal(newPos.newX, newPos.newY, left, top, speed)), 250)
    onMount(() => {setInterval(gameOVER(), 1000)})
</script>


<main>
	<div id="player" class="player" style="left: {left}px; top: {top}px"></div>
    <div id="enemy" class="enemy" style="left: {newPos.newX}px; top: {newPos.newY}px"></div>
    <div id="wall1" class="wall" style="grid-area: 2/2/span 2/span 19"></div>
    <div id="wall2" class="wall" style="grid-area: 5/2/span 2/span 9"></div>
    <div id="wall3" class="wall" style="grid-area: 5/12/span 2/span 9"></div>
    <div id="wall4" class="wall" style="grid-area: 8/2/span 2/span 9"></div>
    <div id="wall5" class="wall" style="grid-area: 8/12/span 2/span 9"></div>
    <div id="wall6" class="wall" style="grid-area: 11/2/span 2/span 19"></div>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
	main {
        display: grid;
        grid-template-columns: repeat(21, 50px);
        grid-template-rows: repeat(13, 50px);
		width: 1050px;
		height: 650px;
		border: solid blue 1px;
		margin: 10px auto;
		position: relative
	}
    .wall{
        background-color: aqua;
    }

	.player {
		width: 50px;
		height: 50px;
		background-color: green;
		position: absolute;
	}
    .enemy {
		width: 50px;
		height: 50px;
		background-color: red;
		position: absolute;
	}
</style>