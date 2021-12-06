<template>
  <div class="container">
      <h2>Registrarse</h2>
      <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
              <td class="SignUp">
                  <div class="Login_Container">
                      <form>
                        <input class="field" type="text"  placeholder="Usuario">
                        <br>
                        <input class="field" type="password"  placeholder="Constraseña">
                        <br>
                        <button type="submit">Registrarse</button>
                      </form>
                  </div>
              </td>
              <td>
                  <img  
                    src="https://media.istockphoto.com/vectors/boy-walking-with-funny-dog-a-child-in-casual-clothes-holding-a-puppy-vector-id1266509982?k=20&m=1266509982&s=612x612&w=0&h=1p93DAVZAtpbig9Zd9KD88FqbJrTotgfqlh3PoFaudE="
                    width = "554"
                    height = "612"
                  />
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  setup() {
    
  },
}
</script>

<style>

h2{
    text-align: center;
}
.container{
    height: 100%;
    width: 100%;
}

table{
    margin: 0 auto;
}

th{
    text-align: center;
}



</style>