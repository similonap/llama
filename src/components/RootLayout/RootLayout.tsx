import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import styles from './RootLayout.module.css';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = () => (
  <div className={styles.RootLayout}>
    <NavBar/>
    <div style={{paddingBottom: "200px"}}>
      <Outlet/>
    </div>
    <Footer/>
  </div>
);

export default RootLayout;
