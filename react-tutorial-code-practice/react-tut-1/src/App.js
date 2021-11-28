import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import useState from 'react';

function App() {

  const [items,setItems] = useState([
    {
      id: 1,
      checked : false,
      item : "One half pound "
    },
    {
      id: 2,
      checked : false,
      item : "Two half pound "
    },
    {
      id: 3,
      checked : false,
      item : "Three half pound "
    }
  ]);
 
  const handleCheck = (id) =>{
    const listItems = items.map((item) => item.id === id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.map((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList',JSON.stringify(listItems));
  }

  return (
    <div className="App">
        <Header title="Grocery List"/>
        <Content item = {items}
        
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}/>
        <Footer/>
    </div>
  );
}

export default App;
