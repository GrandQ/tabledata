import './App.css';
import TableList from './components/TableList';
import useFetch from './hooks/useFetch';
import { items } from './interfaces/itemType';

function App() {

  const {items, loading, error} = useFetch<items[]>('data.json')
  if (error != null) return <p>{error}</p>

  return (
    <div className="App">
      {loading ? <p>Loading...</p>
      :
      <TableList items={items}></TableList>
      }
    </div>
  );
}

export default App;
