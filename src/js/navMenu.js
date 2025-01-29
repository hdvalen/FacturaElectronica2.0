export class NavMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
        <style rel="stylesheet">
          @import "./App/Components/navMenu/menuStyle.css";
        </style>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./src/images/ZJXG7pbLSwyitEyTNSc8_O1cTAW6KAObqc4un.webp" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Bootstrap
            </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" data-verocultar='["vender"]'>Vender</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="" data-verocultar='["producto"]'>Productos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>        
        `;
        this.querySelectorAll(".nav-link").forEach((val, id) => {
          val.addEventListener("click", (e)=>{
              let data = JSON.parse(e.target.dataset.verocultar);
              let mainContent = document.querySelector('#mainContent');
              mainContent.innerHTML= "";
              switch (data[0]){
                case 'vender':
                  mainContent.innerHTML="<contacto-component></contacto-component>";
                  break;
                case 'producto':
                    mainContent.innerHTML="<contacto-component></contacto-component>";
                    break;
              }
              e.stopImmediatePropagation();
              e.preventDefault();
          })
      });
    }
}
customElements.define("nav-menu",NavMenu);