import React, {Component, lazy, Suspense} from 'react';
import './App.css';


const Home  = lazy(() => import('./Home'));

function App() {
  return (
    <Suspense fallback={<div className="center">
      <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
      </div>
    </div>}>
      <div>
        <Home></Home>
      </div>
    </Suspense>
  );
}

export default App;
