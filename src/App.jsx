import menuItems from "./data";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu"
import CurrentOrder from "./CurrentOrder";
import PastOrders from "./PastOrders";


function App() {
  const [order, setOrder] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);

  const newOrder = (item) => {
    const found = order.find(orderItem => orderItem.id === item.id);

    if (found) {
      found.quantity += 1;
      setOrder([...order])
    } else {
      setOrder([...order, {...item, quantity: 1}]);
    }
  };

  const removeOrder = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  const closeOrder = () => {
    if (order.length > 0) {
    setPastOrders([...pastOrders, {items: order}]);
    setOrder([])
  }
};

  const total = order.reduce((total, item) => total + item.price * item.quantity, 0);

  /*irregular functionality 'causes tidy order to count all the multiple
  order items it first then it disregards any further input'
  const tidyOrder = () => {
    const tidy = order.reduce((acc, item) => {
      const found = acc.find(orderItem => orderItem.id === item.id )
      if (found) {
        found.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1});
      }
      return acc;
    }, []);
    setOrder(tidy);
  }
*/

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <Menu items={menuItems}  onOrder={newOrder} />
        </aside>
            <aside><PastOrders pastOrders={pastOrders} /></aside>
        <section>
          <div>
            <CurrentOrder order={order} removeOrder={removeOrder} total={total} />
          <div>
              <button>Tidy order</button>
              <button onClick={closeOrder}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
