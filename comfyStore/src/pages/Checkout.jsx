import React from "react";
import { useSelector } from "react-redux";
import { SectionTitle, cartTotals, CheckoutForm } from "../Components";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must login first");
    return redirect("/login");
  }
  return null;
};
export default function Checkout() {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  const navigate = useNavigate();

  if (cartTotal === 0) {
    return (
      <div>
        <SectionTitle text="Cart is Empty" />
        <button
          className="btn btn-outline mt-5  "
          onClick={() => navigate("/products")}
        >
          Shop Here
        </button>
      </div>
    );
  }
  return (
    <>
      <SectionTitle text="Place your order " />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <cartTotals />
      </div>
    </>
  );
}
