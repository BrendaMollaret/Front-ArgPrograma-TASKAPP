import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Basket, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";
import { useState } from "react";
import { Task } from "../../types/Task";
import { TaskService } from "../../services/TaskService";

const NavBar = () => {

    const Navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]); // Inicializa el estado de las tareas
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleTaskAdded = (newTask: Task) => {
      setTasks([...tasks, newTask]); // Actualiza las tareas en el estado local
    };    

    
    const updateTasks = async (newTask: Task): Promise<{ data?: any; error?: string | undefined }> => {
      try {
        const result = await TaskService.addTask(newTask);
        if (result.data) {
          // Verificar que result.data no sea undefined antes de agregarlo a prevTasks
          if (result.data instanceof Array) {
            setTasks(prevTasks => [...prevTasks, ...result.data]);
          } else {
            setTasks(prevTasks => [...prevTasks, result.data]);
          }
        } else if (result.error) {
          console.error('Error al agregar la tarea:', result.error);
        }
    
        // Retorna el resultado de la operación para que coincida con el tipo esperado en ModalAgregarTareaProps
        return result;
      } catch (error) {
        console.error('Error desconocido:', error);
        // Retorna un objeto con la propiedad error en caso de error
        return { error: 'Error desconocido' };
      }
    };
    
    
    
    
    


  return (

    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Desarrollo en Argentina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
          <Nav.Link onClick={() => Navigate('/')}> Inicio </Nav.Link>

            <NavDropdown title="Tareas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Por hacer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                En producción
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Por testear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Completada
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>
          </Nav>

        <Nav className="d-none d-md-flex ms-auto">
            <Nav.Link href="#carrito">
                <Basket />
            </Nav.Link>

            <Nav.Link href="#usuario">
                <Person />
            </Nav.Link>
        </Nav>

        <div className="d-md-none">
            <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link" href="#ticket">Ticket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#perfil">Perfil</a>
                </li>
            </ul>
        </div>


        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} updateTasks={updateTasks} onTaskAdded={handleTaskAdded} />
    </>
    
    
    
  );
};

export default NavBar;
