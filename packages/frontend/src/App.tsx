import React from 'react';
import { Routes, Route } from "react-router-dom";
import ShoppingList from './pages/ShoppingList';
import { RootWrapper } from './style';

function App() {
  return (
    <RootWrapper>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
      </Routes>
    </RootWrapper>
  );
}

export default App;
