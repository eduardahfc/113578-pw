import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { depositar, levantar } from './store/atmSlice'; 

const ATM = () => {
  const balance = useSelector((state) => state.atm.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const handleTransaction = (type) => {
    if (amount > 0) {
      dispatch(type === 'deposit' ? depositar(amount) : levantar(amount));
      setAmount('');
    }
  };

  return (
    <div className="atm-card">
      <h1>Multibanco</h1>
      <h2>Saldo atual: {balance} €</h2>
      
      <input 
        type="number" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montante..."
      />
      
      <div className="atm-buttons">
        <button className="btn-deposit" onClick={() => handleTransaction('deposit')}>Depositar</button>
        <button className="btn-withdraw" onClick={() => handleTransaction('withdraw')}>Levantar</button>
      </div>
    </div>
  );
};

export default ATM;