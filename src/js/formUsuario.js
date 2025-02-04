
export class formUsuario extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.addEventListener();
    }
    render(){
        this.innerHTML= `
        <div class="container">
        <div class="row justify-content-md-center mt-3">
            <div class="col-1">
            </div>
            <div class="col-10">
                <div class="card">
                    <div class="card-header">
                    Factura Electronica
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">Registro </h5>
                    <img src="" alt="" class="logoLoad">
                    <form class="row g-3" id="frmDataLiga">
                        <team-component></team-component>
                        <div class="col-12">
                            <div class="card border- mb-3" style="max-width: 100%;">
                                <div class="card-header">Registro de productos</div>
                                <div class="card-body">
                                <button type="button" class="btn btn-dark" id="addProduct">Agregar Producto</button>
                                <div class="addProduct">
                                </div>
                                </div>
                            </div>
                        </div>
        `;
    };
}