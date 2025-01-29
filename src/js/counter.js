export class TeamComponent extends HTMLElement {
  constructor() {
      super();
      this.render();
  }
  render(){
    let id = Date.now().toString(16);
      this.innerHTML = /* html */ `
      <div class="container">
      <div class="row justify-content-md-center mt-3">
          <div class="col-1">
          </div>
          <div class="col-10">
              <div class="card">
                  <div class="card-header">
                    Registro de Productos
                  </div>
                  <div class="card-body">
                    <h5 class="card-title"> Registro</h5>
                    <img src="" alt="" class="logoLoad">
                    <form class="row g-3" id="frmDataLiga">
      <div class="row g-3">
      <div class="col-md-12">
              <label for="nameTeam" class="form-label">Numero de Factura</label>
              <input type="text" class="form-control" placeholder=${id} name="nameTeam" id="numFact" disabled>
          </div>
          <div class="col-md-6">
              <label for="nameTeam" class="form-label">Nombre</label>
              <input type="text" class="form-control" name="nameTeam" id="nameTeam">
          </div>
          <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Apellido</label>
              <input type="text" class="form-control" name="Lastname" id="Lastname">
          </div>
          <div class="col-12">
              <label for="inputAddress" class="form-label">Direccion</label>
              <input type="text" class="form-control" name="address" id="address">
          </div>
          <div class="col-md-12">
              <label for="inputEmail" class="form-label">Correo Electronico</label>
              <input type="email" class="form-control" name="EmailUsuario" id="EmailUsuario">
          </div>
      </div>
      <div class="col-12">
                          <div class="card border- mb-3" style="max-width: 100%;">
                              <div class="card-header">Registro de productos</div>
                              <div class="card-body">
                                <button type="button" class="btn btn-dark" id="addProduct">Agregar Producto</button>
                                <div class="container productR">

                                </div>
                              </div>
                            </div>
                      </div>
      `
  }
}
customElements.define("team-component",TeamComponent);