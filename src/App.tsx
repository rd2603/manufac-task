// App.tsx
import React from 'react';
import Flavanoids from './components/FlavanoidsTable';
import Gamma from './components/GammaTable';

function App() {
  return (
    <div>
      <h1>Wine Data Set</h1>
      <h2>Flavanoids</h2>
      <Flavanoids/>
      <h2>Gamma</h2>
      <Gamma/>
    </div>
  );
}

export default App;
