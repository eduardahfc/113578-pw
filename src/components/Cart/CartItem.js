import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price, id, image } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price, image }));
  };

  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1.5rem', 
      backgroundColor: 'white', 
      padding: '1rem', 
      borderRadius: '8px', 
      marginBottom: '1rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
    }}>
    
      <img src={image} alt={title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }} />
      
     
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: '0 0 0.2rem 0', color: '#2b4739', fontSize: '1.1rem' }}>{title}</h3>
          <div style={{ color: '#6b8e7b', fontSize: '0.9rem' }}>
            €{price.toFixed(2)}/unidade
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2b4739' }}>
            €{total.toFixed(2)}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', backgroundColor: '#f2f7f4', padding: '0.4rem', borderRadius: '6px' }}>
            <button onClick={removeItemHandler} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#4a7c59' }}>-</button>
            <span style={{ fontWeight: 'bold', color: '#2b4739' }}>{quantity}</span>
            <button onClick={addItemHandler} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#4a7c59' }}>+</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;