import React, { FC, useContext } from 'react';
import styles from './HomeScreen.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link, useNavigate } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { ThemeContext } from '../../App';
import ImageWheel from '../ImageWheel/ImageWheel';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  let navigate = useNavigate();
  let {color, setColor} = useContext(ThemeContext);
  
  return (

  <div className={styles.HomeScreen}>
    <div className={`${styles.imageBackground} ${styles[color]}`}>
      <div className={styles.title}>
        <h1>Jon Llama</h1>
        <h3>Portfolio voor Web Frameworks</h3>
      </div>
      
      <Button onClick={() => navigate("/portfolio")}>View portfolio</Button>

      <img src="/llama.png" alt="" className={styles.logoOverlay} />
    </div>
    <div className={styles.center}>
      <Container fluid="sm">
          <Row>
            <Col style={{padding: 10}} xs={6}>
                <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Summary</p>
                <p style={{ textAlign: 'left' }}>
                  My name is Jon Llama. I’m an analytical, all-round developer
                  with a passion for making simple and elegant solutions for
                  complex and demanding problems. I strive to write quality
                  code: making it readable, testable and flexible. I’m very keen
                  to learn and improve, and open to feedback.
                </p>
                <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Skills</p>

                <Row>
                  <Col>React.js</Col>
                  <Col>
                    <ProgressBar striped variant="success" now={100} />
                  </Col>
                </Row>
                <Row>
                  <Col>Bash</Col>
                  <Col>
                    <ProgressBar striped variant="success" now={70} />
                  </Col>
                </Row>
                <Row>
                  <Col>Node.js</Col>
                  <Col>
                    <ProgressBar striped variant="success" now={100} />
                  </Col>
                </Row>
                <Row>
                  <Col>C#</Col>
                  <Col>
                    <ProgressBar striped variant="success" now={100} />
                  </Col>
                </Row>
                <Row>
                  <Col>Java</Col>
                  <Col>
                    <ProgressBar striped variant="warning" now={50} />
                  </Col>
                </Row>
                <Row>
                  <Col>Python</Col>
                  <Col>
                    <ProgressBar striped variant="warning" now={50} />
                  </Col>
                </Row>
            </Col>
            <Col>
              <img src="/llama_professional.png" height="400" />
            </Col>
          </Row>
      </Container>
      <ImageWheel/>
    </div>
  </div>
  );
}


export default HomeScreen;
