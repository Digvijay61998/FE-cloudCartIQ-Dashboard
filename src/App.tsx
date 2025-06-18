import React from 'react';
import logo from './logo.svg';
import './App.css';
import OpenRoute from './OpenRoute';

type AppProps = {
  children?: React.ReactNode;
};

function App({ children }: AppProps) : React.ReactElement {
  const isLoggedIn = true
  return (
    <div >
    {(isLoggedIn ) && (
      <OpenRoute />
    )}
  </div>
  );
}

export default App;
