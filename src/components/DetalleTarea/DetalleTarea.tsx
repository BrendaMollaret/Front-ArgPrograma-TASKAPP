import { ArrowLeftRight, Trash } from "react-bootstrap-icons";


const DetalleTarea = () => {
  return (
    <>
    <section className="mt-5 position-relative">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-12 col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="" id="producto-imagen" />
          </div>
          <div className="col-12 col-md-6">
            <h1 id="producto-titulo" className="display-5 fw-bolder">TITULO</h1>
            <div className="f5-5 mb-5">
              <span id="producto-tiempo"></span>
              <p id="producto-descripcion" className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veniam voluptatum amet, id perspiciatis quidem optio pariatur asperiores minima velit iusto cumque modi officia sint quae temporibus unde! Assumenda, quaerat.</p>
              <p className="lead" id="producto-responsable"></p>
              <br />
              <div className="d-flex align-items-center gap-1">
                <div>
                  <select id="estado" name="estado" className="form-select">
                    <option selected value=""> Estado </option>
                    <option value="PORHACER"> Por hacer </option>
                    <option value="ENPRODUCCION"> En producción </option>
                    <option value="PORTESTEAR"> Por testear </option>
                    <option value="COMPLETADA"> Completada </option>
                  </select>
                </div>
                <button className="btn btn-primary d-flex gap-1" id="update-button">
                  <span className="d-none d-md-block"> Cambiar Estado </span>
                  <ArrowLeftRight/>
                </button>
                <button className="btn btn-outline-danger" type="button" id="delete-button">
                  <Trash/>
                </button>
                <a className="btn btn-danger" href="/">
                  Salir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Productos relacionados */}
    <section className="py-5 bg-light">
      <div className="container-fluid px-4 px-lg-5 mt-5">
        <h2 className="fw-bolder mb-4">Productos Relacionados</h2>
        <div id="productos-relacionados" className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4">
          {/* Acá se renderizan los productos relacionados */}
        </div>
      </div>
    </section>

    </>
  );
};

export default DetalleTarea;
