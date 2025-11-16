import React from "react";

const Card = ({ Items, setItems }) => {

  // Remove item completely
  const removeFromCart = (id) => {
    setItems(Items.map(p => p.id === id ? { ...p, Counts: 0 } : p));
  };

  // Filter items with count > 0
  const cartItems = Items.filter(p => p.Counts > 0);

  // Calculate total
  const totalPrice = cartItems.reduce(
    (sum, p) => sum + parseInt(p.price.replace('$','')) * p.Counts,
    0
  );

  if (cartItems.length === 0) 
    return <p className="mt-4 text-xl font-semibold">Your Cart is empty.</p>;

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Qty</th>
              <th className="px-4 py-2 border">Subtotal</th>
              <th className="px-4 py-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(p => (
              <tr key={p.id} className="text-center">
                <td className="px-4 py-2 border">{p.title}</td>
                <td className="px-4 py-2 border">{p.price}</td>
                <td className="px-4 py-2 border w-24">
                  <input
                    type="number"
                    value={p.Counts}
                    readOnly
                    className="w-full text-center border rounded"
                  />
                </td>
                <td className="px-4 py-2 border">
                  ${parseInt(p.price.replace('$','')) * p.Counts}
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => removeFromCart(p.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right mt-4 text-xl font-bold">
        Total: ${totalPrice}
      </div>
    </div>
  );
};

export default Card;
