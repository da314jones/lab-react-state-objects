export default function CurrentOrder ({order, removeOrder, total}) {
    return (
        <div>
        <h2>Current Order</h2>
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} (x{item.quantity})
              <button onClick={() => removeOrder(index)}>❌</button>
            </li>
          ))}
        </ul>
        <h4>Total: {total}</h4>
          </div>
    )
}