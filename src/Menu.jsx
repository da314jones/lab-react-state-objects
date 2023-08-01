export default function Menu({items, onOrder})  {
    return (
    <table>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} onClick={() => onOrder(item)}>
            <td>{item.image}</td>
            <td className="item-name">
              <span>{item.name}</span>
              <br />
              <span>{"🌶️".repeat(item.spiceLevel)}</span>
            </td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}
