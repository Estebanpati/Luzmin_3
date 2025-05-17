

function App() {


  return (
    
    <div className="container-fluid">

        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#">Link 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 3</a>
              </li>
            </ul>
          </div>
      </nav>

      <h1>My First Bootstrap Page: Esteban Alfredo Pati Pari</h1>
      <p>This part is inside a .container class.</p>
      <p>The .container class provides a responsive fixed width container.</p>
      <p>Resize the browser window to see that the container width will change at different breakpoints.</p>

      <div class="container p-5 my-5 border">
            <h1>My First Bootstrap Page</h1>
            <p>This container has a border and some extra padding and margins.</p>
      </div>

      <div class="container-fluid p-5 my-5 bg-dark text-white">
          <h1>My First Bootstrap Page</h1>
          <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
      </div>

      <div class="container p-5 my-5 bg-primary text-white">
          <h1>My First Bootstrap Page</h1>
          <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
      </div>

      <div class="row">
        <div class="col-sm-4 p-3 bg-primary text-white">.col</div>
        <div class="col-sm-8 p-3 bg-dark text-white">.col</div>
      </div>

      <div class="container-sm">.container-sm</div>
      <div class="container-md">.container-md</div>
      <div class="container-lg">.container-lg</div>
      <div class="container-xl">.container-xl</div>
      <div class="container-xxl">.container-xxl</div>

      <div class="container-sm bg-light p-3">
         Este contenedor será 100% ancho en móviles (576px) y tendrá max-width progresivo en pantallas más grandes.
      </div>

    </div>
    
  )
}

export default App
