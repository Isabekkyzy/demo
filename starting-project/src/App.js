import './App.css';
import  Expense from './components/Expense';
function App() {
  const expense = [
    {
      id:'el1',
      title: 'Toilet Paper',
      date: new Date(2023,4,12),
      amount:1.5
    },
    {
      id:'el1',
      title: 'Car Insurance',
      date: new Date(2023,4,12),
      amount:1.5
    },
    
  ]
  return (
    <div className="App">
     <Expense expense={expense}/>
  
    </div>
  
  );
}

export default App;
