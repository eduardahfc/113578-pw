import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div style={{ 
      backgroundColor: '#f2f7f4', 
      padding: '1.5rem', 
      borderRadius: '12px', 
      marginBottom: '2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      
    
      <h2 style={{ 
        fontSize: '0.85rem', 
        textTransform: 'uppercase', 
        letterSpacing: '1.5px', 
        color: '#6b8e7b',
        marginTop: 0, 
        marginBottom: '1.5rem',
        borderBottom: '1px solid #dce8e1', 
        paddingBottom: '0.8rem'
      }}>
        O teu carrinho
      </h2>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              image: item.image,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;