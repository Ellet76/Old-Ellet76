<script>
    let image = "https://i.redd.it/rofzm44oka091.png"
    let photo = "https://i.redd.it/vd9dc7wfk9471.png"
    let picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBBpxt5B1_wx42L-ne7ljT7mgyxfEMOCrXQ&usqp=CAU"
    let images = [image, photo, picture]
</script>


<title>
    PhotoApp
</title> 
<h1>
    PhotoApp
</h1>
<div class="photos" >
    <div class="image-wrapper">
        <img src={images[0]} alt="flexbox rules">
    </div>
    <div class="image-wrapper">
        <img src={images[1]} alt="flexbox rules">
    </div>
    <div class="image-wrapper">
        <img src={images[2]} alt="flexbox vsgridbox">
    </div>
</div>


<style>
    .photos
    {
        display: flex;
        max-width: 80%;
        align-items: center;
        justify-content: space-around;
    }
    .image-wrapper img
    {
        max-width: 100%;
        padding: 5px;
    }
</style>