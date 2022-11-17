import React, { FC, useContext } from 'react';
import styles from './NavBar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

import { FaBeer } from 'react-icons/fa';
import { ThemeContext } from '../../App';
import Ticker from '../Ticker/Ticker';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  let {color, setColor} = useContext(ThemeContext);
  let navigate = useNavigate();

  const bg = color === "blue" ? "#0F52FA" : "#a11d16";

  return (
    <div className={styles.NavBar}>
      <Navbar variant="dark" style={{backgroundColor: bg}}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="/llama.png" alt="" height="24" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="portfolio">
              Portfolio
            </Nav.Link>
          </Nav>
        </Container>
        <Container>

        </Container>
        <Button variant="link">
          <FaBeer style={{ color: 'white' }} onClick={() => { setColor(color === "blue" ? "red" : "blue")}}/>
        </Button>
      </Navbar>
      <Ticker/>
    </div>
  );
};
export default NavBar;
