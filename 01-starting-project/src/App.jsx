import componentsImg from './assets/components.png';
import Header from './components/Header';
import Examples from './components/Examples';
import CoreConcepts from './components/CoreConcepts';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
