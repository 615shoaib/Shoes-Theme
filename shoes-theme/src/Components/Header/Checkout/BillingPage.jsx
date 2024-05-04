import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { apikesy } from "../../../Redux/Api/apikesy";
import { removeAllOrder } from "../../../Redux/Reducer/Cart";
import { Link, useNavigate } from "react-router-dom";

export const BillingPage = () => {


  // navegate for new windwo
  const navigate = useNavigate();


 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const cartItems = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const billingData = {
      billing: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company: formData.company,
        email: formData.email,
        city: formData.city,
        country: formData.country,
        phone: formData.phone,
        state: formData.state,
        postcode: formData.postcode,
        address_1: formData.address_1,
        address_2:formData.address_2
      },
      line_items: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axios.post(
        `https://zahidg21.sg-host.com/wp-json/wc/v3/orders`,
        billingData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${apikesy()}`,
          },
        }
      );
      if (response.status === 201) {
        console.log("Order created:", response.data);
        dispatch(removeAllOrder());
      } else {
        alert("Error creating order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
    navigate("/order-done")
  };

  return (
    <>
    <div className="box-heading">
      <h2 className="billing-heading">BILLING DETAILS</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
        <div className="col-md-6">
          <input
            {...register("firstName", { required: true })}
            className="form-control"
            placeholder="First Name"
          />

          {errors.firstName && (
            <span className="text-danger">First name is required</span>
          )}
        </div>
        <div className="col-md-6">
          <input
            {...register("lastName", { required: true })}
            className="form-control"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <span className="text-danger">Last name is required</span>
          )}
        </div>
        <div className="col-md-12">
          <input
            {...register("company", { required: true })}
            className="form-control"
            placeholder="Company Name"
          />
          {errors.company && (
            <span className="text-danger">Company name is required</span>
          )}
        </div>
        <div className="col-md-12">
          <input
            {...register("city", { required: true })}
            className="form-control"
            placeholder="City"
          />
          {errors.city && <span className="text-danger">City is required</span>}
        </div>

        <div className="col-md-12">
          <input
            {...register("country", { required: true })}
            className="form-control"
            placeholder="Country"
          />
          {errors.country && (
            <span className="text-danger">Country is required</span>
          )}
        </div>
        <div className="col-12">
          <input
            {...register("address_1", { required: true })}
            className="form-control"
            placeholder="Adress No 1"
          />
          {errors.adress && (
            <span className="text-danger">Adress 01</span>
          )}
        </div>
        <div className="col-12">
          <input
            {...register("address_2", { required: true })}
            className="form-control"
            placeholder="address_2"
          />
          {errors.adressNo && (
            <span className="text-danger">address_2</span>
          )}
        </div>
        <div className="col-12">
          <input
            {...register("phone", { required: true })}
            className="form-control"
            placeholder="Phone Number"
          />
          {errors.email && (
            <span className="text-danger">phone Number is required</span>
          )}
        </div>
        <div className="col-12">
          <input
            {...register("email", { required: true })}
            className="form-control"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
        </div>
        <div className="col-12">
          <input
            {...register("state", { required: true })}
            className="form-control"
            placeholder="State"
          />
          {errors.email && (
            <span className="text-danger">State is required</span>
          )}
        </div>
        <div className="col-12">
          <input
            {...register("postcode", { required: true })}
            className="form-control"
            placeholder="Postcode"
          />
          {errors.email && (
            <span className="text-danger">postcode is required</span>
          )}
        </div>

        <div className="col-12 col-lg-12">
          <button type="submit" className="btn btn-custom mb-2 w-100" >
            Place Order
           
          </button>
        </div>
      </form>
    </>
  );
};
