import './App.css';
import CollectionCard from './components/CollectionCard';

function App() {
  return (
    <div className="App mx-5 text-gray-950">
      <nav className="flex space-x-4 py-3">
        <ul>Home</ul>
        <ul>All Collections</ul>
      </nav>
      <div className="my-12">
        <h1 className="text-4xl font-bold text-start">All Collections</h1>
      </div>
      <div className="grid grid-cols-3 py-3 gap-12">
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
        < CollectionCard />
      </div>
    </div>
  );
}

export default App;
