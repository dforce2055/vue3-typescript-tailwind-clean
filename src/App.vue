<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link
      to="/about"
      class="a a aa aa aa as asd asd asd asd asd asda asda asdasdas asdsadasd b c c das dasdasdads ddasd sd"
    >
      About Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Cumque recusandae at voluptatibus facilis consequuntur non 
      tempora iure alias tempore aliquam pariatur, voluptate,
      quos ipsum rerum sint ratione ut ab fugit? lorem ipsum 
      dolor sit amet
    </router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
