

const CategoriasSelector = () => {
  return (

    <section className="container mt-3" id="selector-categorias">
      <p className="fs-3"> Seleccione una categoría </p>
      <div className="row gap-4">
        <div className="col d-flex justify-content-center p-0">
          <a href="#porHacer"
            className="border border-1 border-black d-flex gap-1 align-items-center rounded p-1 text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-card-checklist" viewBox="0 0 16 16">
              <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path
                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.a.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.a.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.a.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
            </svg>
            <span className="fs-4 text-dark-emphasis">Por hacer</span>
          </a>
        </div>
        <div className="col d-flex justify-content-center p-0">
          <a href="#enProduccion"
            className="border border-1 border-black d-flex gap-1 align-items-center rounded p-1 text-decoration-none">
            <img src="https://cdn-icons-png.flaticon.com/512/1287/1287849.png" alt="Por hacer"
              style={{ width: '25px', height: '25px' }} />
            <span className="fs-4 text-dark-emphasis">En Producción</span>
          </a>
        </div>
        <div className="col d-flex justify-content-center p-0">
          <a href="#porTestear"
            className="border border-1 border-black d-flex gap-1 align-items-center rounded p-1 text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-pencil-square" viewBox="0 0 16 16">
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg>
            <span className="fs-4 text-dark-emphasis">Por Testear</span>
          </a>
        </div>
        <div className="col d-flex justify-content-center p-0">
          <a href="#completada"
            className="border border-1 border-black d-flex gap-1 align-items-center rounded p-1 text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
            </svg>
            <span className="fs-4 text-dark-emphasis">Completada</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriasSelector;
