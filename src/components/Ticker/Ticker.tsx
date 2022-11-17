import React, { FC, useEffect,useState } from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './Ticker.module.css';

interface TickerProps {}

const Ticker: FC<TickerProps> = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    const getStockMarketData = async () => {
      let response = await fetch('https://api.polygon.io/v2/reference/news?apiKey=tiOhBpJpajoE8TQDSb6osu04rbEq50zN')

      let json = await response.json();

      setText(json.results.map((n : any) => n.title).join(" | "));
    }

    getStockMarketData();
  }, []);


  return (
  <Navbar variant="dark" style={{backgroundColor: "black"}}>
          <div className={styles.marquee}>
            <span style={{width: "100%"}}>{text}</span>

          </div>
  </Navbar>
)}
;

export default Ticker;
