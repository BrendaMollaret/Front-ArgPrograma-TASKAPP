

const CategoriasTareas = () => {
  return (
    <section className="container-fluid mt-5" id="categorias">

      <section className="text-center mb-5" id="porHacer">
        <h3 className="display-6">Por Hacer</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4" id="contenedor-porHacer">
          {/* Contenido dinámico para Por Hacer */}
        </div>
      </section>

      <section className="text-center mb-5" id="enProduccion">
        <h3 className="display-6">En Producción</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4" id="contenedor-enProduccion">
          {/* Contenido dinámico para En Producción */}
        </div>
      </section>

      <section className="text-center mb-5" id="porTestear">
        <h3 className="display-6">Por Testear</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4" id="contenedor-porTestear">
          {/* Contenido dinámico para Por Testear */}
        </div>
      </section>

      <section className="text-center mb-5" id="completada">
        <h3 className="display-6">Completada</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4" id="contenedor-completada">
          {/* Contenido dinámico para Completada */}
        </div>
      </section>
    </section>
  );
};

export default CategoriasTareas;
