import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity); 

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button 
      onClick={toggleCartHandler}
      style={{
        backgroundColor: '#1b3025', 
        color: '#e8f0ec', 
        border: '1px solid #386345',
        padding: '0.6rem 1.2rem',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        transition: 'background-color 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#112119'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1b3025'}
    >
      <span>Meu Carrinho</span>
      <span style={{ 
        backgroundColor: '#4a7c59', 
        color: 'white', 
        padding: '0.1rem 0.6rem', 
        borderRadius: '20px', 
        fontSize: '0.85rem' 
      }}>
        {cartQuantity}
      </span>
    </button>
  );
};

export default CartButton;