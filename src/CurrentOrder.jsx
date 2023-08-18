export default function CurrentOrder({
  order,
  removeOneOrder,
  removeAll,
  total,
}) {
  return (
    <div>
      <h2>Current Order</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} (x{item.quantity})
            <button onClick={() => removeOneOrder(index)} className="removeOneOrder"><i className="fas fa-minus" style={{color: "#e9071e",}} />
</button>
            <button onClick={() => removeAll(index)} className="removeAll">❌</button>
          </li>
        ))}
      </ul>
      <h4>Total: {total}</h4>
    </div>
  );
}
