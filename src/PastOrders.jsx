export default function PastOrders({ pastOrders }) {
  return (
    <div className="pastOrder">
      <h3>Past orders</h3>
      <div>
        {pastOrders.map((order, index) => {
          return (
            <ul>
              <li key={index}>
                {Array.isArray(order.items) &&
                  order.items.map((item, index) => (
                    <li key={item.id + index}>{item.name} (qt: {item.quantity})</li>
                  ))}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
