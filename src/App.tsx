import React, { useState } from 'react';
import './index.scss';

interface Finance {
  id: string;
  description: string;
  amount: number;
  date: string;
}

const App: React.FC = () => {
  const [finances, setFinances] = useState<Finance[]>([]);
  const [editingFinance, setEditingFinance] = useState<Finance | null>(null);

  const addFinance = (finance: Finance) => {
    if (editingFinance) {
      setFinances((prev) =>
        prev.map((f) => (f.id === finance.id ? finance : f))
      );
      setEditingFinance(null);
    } else {
      setFinances((prev) => [...prev, finance]);
    }
  };

  const deleteFinance = (id: string) => {
    setFinances((prev) => prev.filter((f) => f.id !== id));
  };

  const editFinance = (finance: Finance) => {
    setEditingFinance(finance);
  };

  return (
    <div className="app">
      <h1>Finance-CRUD</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const description = (form.elements.namedItem('description') as HTMLInputElement).value;
          const amount = parseFloat(
            (form.elements.namedItem('amount') as HTMLInputElement).value
          );
          const date = (form.elements.namedItem('date') as HTMLInputElement).value;

          addFinance({
            id: editingFinance?.id || Date.now().toString(),
            description,
            amount,
            date,
          });

          form.reset();
        }}
      >
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          defaultValue={editingFinance?.description || ''}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Valor"
          defaultValue={editingFinance?.amount || ''}
          required
        />
        <input
          type="date"
          name="date"
          defaultValue={editingFinance?.date || ''}
          required
        />
        <button type="submit">
          {editingFinance ? 'Atualizar' : 'Adicionar'}
        </button>
      </form>
      <ul>
        {finances.map((finance) => (
          <li key={finance.id}>
            <span>{finance.description}</span>
            <span>{finance.amount}</span>
            <span>{finance.date}</span>
            <button onClick={() => editFinance(finance)}>Editar</button>
            <button onClick={() => deleteFinance(finance.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
