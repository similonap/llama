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
import ContactScreen from './components/ContactScreen/ContactScreen';

export const ThemeContext = React.createContext({color: "red", setColor: (color: string) => {}, navigationItems: [] as NavigationItem[]});

export interface NavigationItem {
  element: React.ReactNode;
  path: string;
  description: string;
  title: string;
  type: string;
}

const App = () => {
  const [color, setColor] = useState("red");

  const [navigationItems, setNavigationItems] = useState([
    {
      element: <ButtonCalc />,
      path: "portfolio/button",
      description: "A simple calculator that uses React Hooks and TypeScript",
      title: "Button Calculator",
      type: "portfolio"
    },
    {
      element: <ColorPicker />,
      path: "portfolio/color",
      description: "A simple color picker that uses React Hooks and TypeScript",
      title: "Color Picker",
      type: "portfolio"
    },
    {
      element: <Slots />,
      path: "portfolio/slots",
      description: "A simple slot machine that uses React Hooks and TypeScript",
      title: "Slots",
      type: "portfolio"
    },
    {
      element: <QuizAppWrapper />,
      path: "portfolio/quizapp",
      description: "A simple quiz app that uses React Hooks and TypeScript",
      title: "Quiz App",
      type: "portfolio"
    },
    {
      element: <TicTacToe />,
      path: "portfolio/tictactoe",
      description: "A simple tic tac toe game that uses React Hooks and TypeScript",
      title: "Tic Tac Toe",
      type: "portfolio"
    },
    { 
      element: <HomeScreen />,
      path: "home",
      description: "Home Screen",
      title: "Home",
      type: "page"
    },
    {
      element: <PortfolioScreen />,
      path: "portfolio",
      description: "Portfolio Screen",
      title: "Portfolio",
      type: "page"
    },
    {
      element: <ContactScreen />,
      path: "contact",
      description: "Contact Screen",
      title: "Contact",
      type: "page"
    }
  ])

  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        ...navigationItems.map(item => {
          return {
            path: item.path,
            element: item.element
          }
        }),
        {
          path: "",
          element: <HomeScreen/>
        }
      ]
    }
  ])
  return (
    <ThemeContext.Provider value={{color: color, setColor: setColor, navigationItems: navigationItems}}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
