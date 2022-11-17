import React, { FC, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../../App';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  let {color, setColor} = useContext(ThemeContext);

  return (
    <div className={`${styles.Footer} ${styles[color]}`}>
      <Container style={{margin: 10}}>
        (c) 2021 - Made by Jon LLama

      </Container>
    </div>
  );
  }

export default Footer;
