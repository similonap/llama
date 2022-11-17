import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PortfolioScreen from './components/PortfolioScreen/PortfolioScreen';
import ButtonCalc from './components/PortfolioScreen/ButtonCalc/ButtonCalc';
import ColorPicker from './components/PortfolioScreen/ColorPicker/ColorPicker';
import Slots from './components/PortfolioScreen/Slots/Slots';
import QuizAppWrapper from './components/PortfolioScreen/QuizApp/QuizApp';
import TicTacToe from './components/PortfolioScreen/TicTacToe/TicTacToe';

export const ThemeContext = React.createContext({color: "red", setColor: (color: string) => {}});

const App = () => {
  const [color, setColor] = useState("red");
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "home",
          element: <HomeScreen/>
        },
        {
          path: "portfolio",
          element: <PortfolioScreen/>
        },
        {
          path: "portfolio/slots",
          element: <Slots/>
        },
        {
          path: "portfolio/button",
          element: <ButtonCalc/>
        },
        {
          path: "portfolio/color",
          element: <ColorPicker/>
        },
        {
          path: "portfolio/quizapp",
          element: <QuizAppWrapper/>
        },
        {
          path: "portfolio/tictactoe",
          element: <TicTacToe/>
        },
        {
          path: "",
          element: <HomeScreen/>
        }
      ]
    }
  ])
  return (
    <ThemeContext.Provider value={{color: color, setColor: setColor}}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
