
export class addProducto extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render() {
        this.innerHTML= `
        <div class="row mt-3" id="GrpProduct${id}">
        <div class="col-6">
            <label for="codigoProducto" class="form-label">Codigo Producto</label>
            <input type="text" class="form-control" placeholder="${id}" id="codigoProduct${id}" name="codigoProduct${id}" disabled>
        </div>
        <div class="col-6">
            <label for="nameTeam" class="form-label">Nombre Producto</label>
            <input type="text" class="form-control" placeholder="Nombre" id="nameProduct${id}" name="nameProduct${id}">                                       
        </div>
        <div class="col-6">
            <label for="nameTeam" class="form-label">Cantidad</label>
            <input type="number" class="form-control" id="cantidadProduct${id}" name="cantidadProduct${id}">                                       
        </div>
        <div class="col-6">
            <label for="nameTeam" class="form-label">Valor Unidad</label>
            <input type="number" class="form-control" id="valorProduct" name="valorProduct${id}">
        </div>
        <div class="col-6 mt-3">
            <button type="button" class="btn btn-secondary" data-id="${id}" id="removeProduct">Eliminar</button>
            <button type="button" class="btn btn-primary" data-id="${id}" id="addToTable">Registrar</button>
        </div>
    </div>
        `;
    
        this.addEventListener();
        
        // Cargar pilotos desde db.json
        fetch('../../../db.json')
            .then(response => response.json())
            .then(data => {
                const selectsPilotos = this.shadowRoot.querySelectorAll(".nombrePilotoVeh");
                selectsPilotos.forEach(select => {
                    data.pilotos.forEach(piloto => {
                        const option = document.createElement("option");
                        option.value = piloto.id;
                        option.textContent = piloto.nombrePiloto;
                        select.appendChild(option);
                    });
                });
            })
            .catch(error => {
                console.error("Error al cargar los datos de los pilotos:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudieron cargar los pilotos. Por favor, recarga la página.',
                });
            });
    }
    crearCircuitos = () => {
        const formCrearCircuito = this.shadowRoot.querySelector('#formCrearCircuito');
        const statusMessage = this.shadowRoot.querySelector('#statusMessage');
    
        const formData = new FormData(formCrearCircuito);
        const datos = Object.fromEntries(formData.entries());
    
        const circuito = {
            nombreCircuito: datos.nombreCircuito,
            paisCircuito: datos.paisCircuito,
            longitud: datos.longitud,
            vueltas: datos.vueltas,
            descripcion: datos.descripcion,
            record_vuelta: { tiempo: datos.tiempo, piloto: datos.piloto, año: datos.año },
            ganadores: [
            { temporada: datos.temporada1, piloto: datos.nombrePiloto1 },
            { temporada: datos.temporada2, piloto: datos.nombrePiloto2 },
            { temporada: datos.temporada3, piloto: datos.nombrePiloto3 }
            ],
            imagenCircuito: datos.imagenCircuito
        }

        postCircuitos(circuito)
            .then(response => response.json())
            .then(responseData => {
                statusMessage.textContent = '¡Circuito registrado exitosamente!';
                statusMessage.className = 'status-message success';
                statusMessage.style.display = 'block';
                formCrearCircuito.reset();
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
                statusMessage.textContent = 'Error al registrar el circuito.';
                statusMessage.className = 'status-message error';
            });
    };
}