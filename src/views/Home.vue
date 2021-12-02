<template>
    <div class ="cuerpo">
        
        
        
        <div>

        <div class="card1">
  
            <div class="card_part card_part-one">
            </div>
  
            <!-- Photo 2 -->
            <div class="card_part card_part-two">

            </div>

            <!-- Photo 3 -->
            <div class="card_part card_part-three">
            </div>

            <!-- Photo 4 -->
            <div class="card_part card_part-four">
            </div>

        </div>

        </div>
    
    

    
        
    </div> 
    <div class="cuerpo">
    <p><h1>Guarderia</h1></p>   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum ut nobis molestias sunt minima labore ullam impedit officiis enim. Perferendis provident eaque ad numquam, quisquam corporis explicabo delectus unde?
    Esse laboriosam exercitationem alias iste praesentium necessitatibus libero deserunt recusandae voluptate nisi, quasi reprehenderit ea, ipsa eveniet unde impedit, delectus adipisci labore similique perspiciatis illum inventore eligendi rerum magni. Repudiandae!
    At exercitationem officia neque voluptatem cum assumenda inventore nemo vel ipsa, praesentium placeat debitis optio consequuntur ducimus, totam atque tempora non? Rem unde voluptatem corrupti. Id fugit nisi possimus ipsam.
    Obcaecati dolorem modi nulla, provident quae eveniet illo ipsum perferendis. Aliquam consectetur et repudiandae incidunt? Ab officiis delectus corporis, nulla beatae qui fugiat culpa libero voluptatem, minus, maiores assumenda. Delectus?
    Adipisci laborum ratione sint dolores debitis, optio pariatur porro dolorum at qui, recusandae eius quod deleniti rerum expedita temporibus. Doloremque distinctio ad quo officia sint fugit cupiditate pariatur quae labore!</p>
    </div>

</template> 

<script>
export default {
  name: "home",

  created: function () {},
};
</script>
<style>

.cuerpo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 15%;
  padding-right: 15% ;
}
body {
  margin: 0 0 0 0;
}

.header {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: #F29F05;
  color: #F29F05;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  width: 20%;
  text-align: center;
}

.card {
  /*
    --card-gradient: rgba(0, 0, 0, 0.8);
    --card-gradient: #949494b7, #00000088;
    --card-blend-mode: overlay;
     */

  background-color: rgba(255, 255, 255, 0.534);
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;
}
img {
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  object-fit: cover;

  max-height: max(20rem, 30vh);
  aspect-ratio: 4/3;
  mix-blend-mode: var(--card-blend-mode);
}

:last-child {
  margin-bottom: 0;
}

:hover,
:focus-within {
  --card-gradient: #00000075 max(8.5rem, 20vh);
}

/* Additional demo display styles */
* {
  box-sizing: border-box;
}

body {
  display: grid;
  place-content: center;
  justify-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 1rem;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  color: #444;
  background-color: #ffffff;
}

.card h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
}

.card a {
  color: inherit;
}

.card-wrapper {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
  max-width: 100vw;
  width: 120ch;
  padding-left: 1rem;
  padding-right: 1rem;
}

:root {
  --duration: 20s;
  --delay: 20s;
}

html {
  background-color: black;
  animation: shrink var(--duration) var(--delay) linear infinite;
}

body {
  position: relative;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  animation: spin var(--duration) var(--delay) linear infinite;
  transform-style: preserve-3d;
  perspective: 25rem;
}

.card1 {
  position: relative;

  width: 700px;
  height: 400px;
  overflow: hidden;

  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

/*Light blue cover above the slide show*/
.card1::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 900;

  display: block;
  width: 100%;
  height: 100%;

  background-color: rgba(140, 22, 115, 0.2);
}

.card_part {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  transform: translateX(700px);
  background-image: url(https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);

  animation: opaqTransition 28s cubic-bezier(0, 0, 0, 0.97) infinite;
}

.card_part.card_part-two {
  z-index: 6;
  background-image: url(https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
  animation-delay: 7s;
}

.card_part.card_part-three {
  z-index: 5;
  background-image: url(https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
  animation-delay: 14s;
}

.card_part.card_part-four {
  z-index: 4;
  background-image: url(https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
  animation-delay: 21s;
}

@keyframes opaqTransition {
  3% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  28% {
    transform: translateX(-700px);
  }
  100% {
    transform: translateX(-700px);
  }
}
</style>