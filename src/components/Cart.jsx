import { Button, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  // Calculate the total price of all items in the cart
  const totalPrice = items.reduce((acc, item) => acc + (item.quantity || 1) * item.price, 0);

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <Table bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                <Button variant="danger" onClick={() => removeItem(item.id)}>&times;</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Display the total price */}
      <p>Total: {totalPrice.toFixed(2)}$</p> {/* Format to two decimal places */}
    </>
  );
}

export default Cart;
