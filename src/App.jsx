import {Fragment} from 'react';
import CoreConcepts from './Components/CoreConcepts.jsx';
import Header from './components/Header.jsx';
import Examples from './Components/Examples.jsx';

function App() {
  

  return (
    <Fragment>
      <Header></Header>
      <main>
          <CoreConcepts />
          <Examples />
      </main>
    </Fragment>
  );
}

export default App;
