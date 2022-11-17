import React, { FC } from 'react';
import styles from './PortfolioScreen.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface PortfolioScreenProps {}

const PortfolioScreen: FC<PortfolioScreenProps> = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.PortfolioScreen}>
      <h1>Portfolio</h1>
      <p>Here are some of my projects I have been working on. They are mostly written in React/Typescript because I have focussed mainly on this during my course at AP Hogeschool.</p>
    <div className={styles.center}>


      <Container className="m-4 gx-5 gy-5" style={{width: "70%"}}>
        <Row className="gx-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Slots</Card.Title>
                <Card.Text>
                  This application is a slot machine game. It is made with React.js and Typescript.
                </Card.Text>
                <Button variant="primary" onClick={() => { navigate("/portfolio/slots"); }}>Check it out</Button>

              </Card.Body>
            </Card>
          </Col> 
          <Col>
            <Card>
                <Card.Body>
                  <Card.Title>Button Counter</Card.Title>
                  <Card.Text>
                    This application is a button counter. It is made with React.js and Typescript.
                  </Card.Text>
                  <Button variant="primary" onClick={() => { navigate("/portfolio/button"); }}>Check it out</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
                <Card.Body>
                  <Card.Title>Color picker</Card.Title>
                  <Card.Text>
                    This application contains a color picker component made with React.js and Typescript.
                  </Card.Text>
                  <Button variant="primary" onClick={() => { navigate("/portfolio/color"); }}>Check it out</Button>
                </Card.Body>
            </Card>
          </Col>             
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Quiz App</Card.Title>
                <Card.Text>
                  This application is a quiz game. It is made with React.js and Typescript.
                </Card.Text>
                <Button variant="primary" onClick={() => { navigate("/portfolio/quizapp"); }}>Check it out</Button>

              </Card.Body>
            </Card>
          </Col> 
          <Col>
            <Card>
                <Card.Body>
                  <Card.Title>Tic Tac Toe</Card.Title>
                  <Card.Text>
                    This application is a tic tac toe game. It is made with React.js and Typescript.
                  </Card.Text>
                  <Button variant="primary" onClick={() => { navigate("/portfolio/tictactoe"); }}>Check it out</Button>
                </Card.Body>
            </Card>
          </Col>  
          <Col></Col>           
        </Row>
      </Container>
    </div>
  </div>
  ); 
}

export default PortfolioScreen;
