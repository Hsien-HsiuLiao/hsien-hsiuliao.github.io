import React from 'react';
//import './App.css';
import { Header } from './components/Header/Header.tsx'
import { Main } from './components/Main/Main.tsx'
import { GlobalStyle } from './styles/global.ts'


function App() {
  return (
    /*  <div className="App"> */
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      {/*   <header className="App-header">
        
        <p>
          Hsien-Hsiu's portfolio
        </p>
        
      </header> */}
      {/*    </div>  */}
    </>
  );
}

export default App;
