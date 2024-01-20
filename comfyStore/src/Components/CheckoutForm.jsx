import React from "react";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      cartItems,
      orderTotal,
      numItemsInCart,
    };

    try {
      const response = customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401) {
        toast.warn("Unauthorised, Please register first  ");
        redirect("/login");
      }
      if (error?.response?.status === 403) {
        toast.warn("Forbidden, Please check your credentials ");
        redirect("/login");
      }

      return null;
    }
  };
export default function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4 ">
      <h4 className="font-medium text-xl">Please Enter your Information</h4>
      <FormInput label="Enter your name " name="name" type="text" />
      <FormInput label="Enter your address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
}
