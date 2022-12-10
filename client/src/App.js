import { useState } from "react";


function App() {
  const [form, setForm] = useState({
    amount: 0, 
    description: '',
    date : '' 
  })
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form);
  }
  return (
    <div >
      <form onSubmit={onSubmit}>
        <input type="number" name="amount"
          value={form.amount}
          onChange={event => setForm(prev => ({ ...prev, amount: event.target.value }))} placeholder='Enter transcation amount' />
        
        <input type="text" name="description"
          value={form.description}
          onChange={event => setForm(prev => ({ ...prev, description: event.target.value }))} placeholder='Enter transcation details' />
        
        <input type="date" name="date"
          value={form.date}
          onChange={event => setForm(prev => ({ ...prev, date: event.target.value }))} />
        <button type='submit'>Submit</button>
     </form>
    </div>
  );
}

export default App;
