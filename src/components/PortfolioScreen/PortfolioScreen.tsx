import React, { FC, useContext } from 'react';
import styles from './PortfolioScreen.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';

interface PortfolioScreenProps {}

const PortfolioScreen: FC<PortfolioScreenProps> = () => {
  let {navigationItems} = useContext(ThemeContext);
  let navigate = useNavigate();

  return (
    <div className={styles.PortfolioScreen}>
      <h1>Portfolio</h1>
      <p>Here are some of my projects I have been working on. They are mostly written in React/Typescript because I have focussed mainly on this during my course at AP Hogeschool.</p>
    <div className={styles.center}>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
      {navigationItems.map((item, index) => (
        item.type === "portfolio" ? (
        <Card style={{ width: '18rem', margin: "10px" }} key={index}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary" onClick={() => navigate("/" + item.path)}>Go to project</Button>
          </Card.Body>
        </Card>) : null
      ))}
    </div>

    </div>
  </div>
  ); 
}

export default PortfolioScreen;
