import './App.css';
import CollectionCard from './components/CollectionCard';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold">All Collections</h1>
      <div className="grid grid-cols-3">
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
      </div>
    </div>
  );
}

export default App;
