import { useSelector } from "react-redux";

export default function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card g-base-200">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span> Subtotal </span>
          <span className="font-medium">₹ {cartTotal}</span>
        </p>

        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span> Shipping </span>
          <span className="font-medium">₹ {shipping}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span> Tax </span>
          <span className="font-medium">₹ {tax.toFixed(2)}</span>
        </p>
        <p className="mt-4 flex justify-between text-sm pb-2">
          <span className="font-bold">Order Total</span>
          <span className="font=bold">₹ {orderTotal}</span>
        </p>
      </div>
    </div>
  );
}
