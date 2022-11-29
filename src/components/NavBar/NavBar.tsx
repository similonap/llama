import React, { FC, useContext } from 'react';
import styles from './NavBar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import '@docsearch/css';
import { FaBeer } from 'react-icons/fa';
import { ThemeContext } from '../../App';
import Ticker from '../Ticker/Ticker';
import { Form } from 'react-bootstrap';
import SearchModal from '../SearchModal/SearchModal';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  let {color, setColor} = useContext(ThemeContext);
  const [showSearch, setShowSearch] = React.useState(false);
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

            <Nav.Link as={Link} to="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
        <button onClick={() => setShowSearch(true)} type="button" className="DocSearch DocSearch-Button" aria-label="Search"><span className="DocSearch-Button-Container"><svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span className="DocSearch-Button-Placeholder">Search</span></span></button>
        <Button variant="link">
          <FaBeer style={{ color: 'white' }} onClick={() => { setColor(color === "blue" ? "red" : "blue")}}/>
        </Button>
      </Navbar>
      <Ticker/>
      <SearchModal showSearch={showSearch} setShowSearch={setShowSearch}/>
    </div>
  );
};
export default NavBar;
