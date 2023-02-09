import "./NavBar.css";
import CartWiget from "./CartWiget.jsx";


import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <>
      <div className="navBar">
        <div className="logo-container">
          <img
            className="logo"
            src="https://i.pinimg.com/originals/9e/1f/7a/9e1f7adef7fff8831aee14f2a2cdffa4.jpg"
            alt=""
            width={'40px'}
          />
          
          <h4>Merlin</h4>
          
          
        </div>
        <div>
          {/* --------------------- */}
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Categorias"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Posiones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Hechisos
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Armaduras Encantadas</NavDropdown.Item>
            
            <NavDropdown.Item href="#action/3.4">
              Objetos Magicos
            </NavDropdown.Item>
          </NavDropdown>
          {/* ---------------------- */}
        </div>
        <div>
        <CartWiget/>
        </div>
      </div>
    </>
  );
}

export default NavBar;
