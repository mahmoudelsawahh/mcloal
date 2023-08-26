"use client";

import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./page.module.css";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
// import { useRouter } from "next/navigation";
// import { Toast } from "primereact/toast";
import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

import { Checkbox } from "primereact/checkbox";
// import { LiaApplePay } from "react-icons/lia";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Checkout = () => {
  // const toast = useRef(null);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      frist_name: "",
      last_name: "",
      Company_Name: "",
      country_region: "",
      Street_address: "",
      suite_unit: "",
      City: "",
      state: "",
      phone: "",
      postal_code: "",
      delivary_instractions: "",
      default_shipping: false,
      default_billing: false,
    },
    validate: (data) => {
      let errors = {};
      if (!data.frist_name) {
        errors.frist_name = " Frist Name is required.";
      }
      if (!data.last_name) {
        errors.last_name = " Last Name is required.";
      }
      if (!data.country_region) {
        errors.country_region = " Country / Region is required.";
      }
      if (!data.Street_address) {
        errors.Street_address = " Street address is required.";
      }
      if (!data.City) {
        errors.City = " City is required.";
      }
      if (!data.state) {
        errors.state = " state is required.";
      }
      if (!data.postal_code) {
        errors.postal_code = " Postal code Name is required.";
      }
      if (!data.phone) {
        errors.phone = "Phone is required.";
      } else if (/\D/.test(data.phone)) {
        errors.phone = "Invalid Phone Number.";
      }

      return errors;
    },
    onSubmit: (data) => {
      if (data) {
        // router.push("/profile/info");
        // dispatch(getLogin(data))
        //   .unwrap()
        //   .then((res) => {
        //     if (res.success === false) {
        //       res.errors.map((ele) => {
        //         return EMptyInput(ele);
        //       });
        //     } else {
        //       show();
        //       Cookies.set("PharToken", res.data.token);
        //       Cookies.set("PharName", res.data.name);
        //       Cookies.set("PharId", res.data.id);
        //       // navigate("/", { replace: true });
        //       router.push("/profile/info")
        //       formik.resetForm();
        //     }
        //   });
      }
    },
  });
  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const formik_credit = useFormik({
    initialValues: {
      card_number: "",
      name_of_card: "",
      exp_date: "",
      security_code: "",
    },
    validate: (data) => {
      let errors = {};
      if (!data.name_of_card) {
        errors.name_of_card = " Name of card is required.";
      }
      if (!data.card_number) {
        errors.card_number = "Card Number is required.";
      } else if (/\D/.test(data.card_number)) {
        errors.card_number = "Invalid Card Number.";
      }
      if (!data.exp_date) {
        errors.exp_date = "Expiration date is required.";
      } else if (/\D/.test(data.exp_date)) {
        errors.exp_date = "Invalid Expiration date.";
      }
      if (!data.security_code) {
        errors.security_code = "Security Code is required.";
      } else if (/\D/.test(data.security_code)) {
        errors.security_code = "Invalid Security Code.";
      }
      return errors;
    },
    onSubmit: (data) => {
      router.push("/checkout/success");
      if (data) {
        // console.log(data);
        // router.push("/profile/info");
        // dispatch(getLogin(data))
        //   .unwrap()
        //   .then((res) => {
        //     if (res.success === false) {
        //       res.errors.map((ele) => {
        //         return EMptyInput(ele);
        //       });
        //     } else {
        //       show();
        //       Cookies.set("PharToken", res.data.token);
        //       Cookies.set("PharName", res.data.name);
        //       Cookies.set("PharId", res.data.id);
        //       // navigate("/", { replace: true });
        //       router.push("/profile/info")
        //       formik.resetForm();
        //     }
        //   });
      }
    },
  });

  const isForm_CreditFieldInvalid = (name) =>
    !!(formik_credit.touched[name] && formik_credit.errors[name]);
  const getForm_CreditErrorMessage = (name) => {
    return isForm_CreditFieldInvalid(name) ? (
      <small className="p-error">{formik_credit.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const colors = [
    { name: "Same As Billing Address", key: "gray" },
    { name: "Use A diffrent shipping address", key: "gray" },
  ];
  const [selectedColors, setSelectedColors] = useState(colors[0]);
  const [paytype, SetPayType] = useState("");
  return (
    <div className=" container margin_top">
      <div className={"cramp"}>
        <Link href={"/"}>Home</Link>
        <span>
          <MdArrowForwardIos />
        </span>
        <Link href={`/checkout`}>Checkout </Link>
      </div>
      <h1 className=" main_two">Checkout</h1>
      <div className="grid">
        <div className="col-12 md:col-8">
          <h2 className="main_two">Billing Details</h2>
          <div className="grid">
            <div className="col-12">
              <form onSubmit={formik.handleSubmit} className="grid  ">
                <div className="col-12 md:col-6">
                  <div className="inputFormik">
                    <label htmlFor="frist_name">Frist Name *</label>
                    <InputText
                      placeholder="Enter Your Name"
                      name="frist_name"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("frist_name"),
                      })}
                      value={formik.values.frist_name}
                      onChange={(e) => {
                        formik.setFieldValue("frist_name", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("frist_name")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <label htmlFor="last_name">Last Name *</label>
                    <InputText
                      placeholder="Last Name"
                      name="last_name"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("last_name"),
                      })}
                      value={formik.values.last_name}
                      onChange={(e) => {
                        formik.setFieldValue("last_name", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("last_name")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <label htmlFor="Company_Name">Company Name </label>
                    <InputText
                      placeholder="Company Name"
                      name="Company_Name"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("Company_Name"),
                      })}
                      value={formik.values.Company_Name}
                      onChange={(e) => {
                        formik.setFieldValue("Company_Name", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <label htmlFor="country_region">Country Region *</label>
                    <InputText
                      placeholder="Company Name"
                      name="country_region"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("country_region"),
                      })}
                      value={formik.values.country_region}
                      onChange={(e) => {
                        formik.setFieldValue("country_region", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("country_region")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <label htmlFor="Street_address">Street Address *</label>
                    <InputText
                      placeholder="Street Address"
                      name="Street_address"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("Street_address"),
                      })}
                      value={formik.values.Street_address}
                      onChange={(e) => {
                        formik.setFieldValue("Street_address", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("Street_address")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <label htmlFor="suite_unit">Apt, suite, unit</label>
                    <InputText
                      placeholder="Apt, suite, unit"
                      name="suite_unit"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("suite_unit"),
                      })}
                      value={formik.values.suite_unit}
                      onChange={(e) => {
                        formik.setFieldValue("suite_unit", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-12  md:col-4">
                  <div className="inputFormik">
                    <label htmlFor="City">City *</label>
                    <InputText
                      placeholder="City"
                      name="City"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("City"),
                      })}
                      value={formik.values.City}
                      onChange={(e) => {
                        formik.setFieldValue("City", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("City")}
                  </div>
                </div>
                <div className="col-12  md:col-4">
                  <div className="inputFormik">
                    <label htmlFor="state">State *</label>
                    <InputText
                      placeholder="Company Name"
                      name="state"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("state"),
                      })}
                      value={formik.values.state}
                      onChange={(e) => {
                        formik.setFieldValue("state", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("state")}
                  </div>
                </div>

                <div className="col-12  md:col-4">
                  <div className="inputFormik">
                    <label htmlFor="postal_code">Postal code *</label>
                    <InputText
                      placeholder="Postal code"
                      name="postal_code"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("postal_code"),
                      })}
                      value={formik.values.postal_code}
                      onChange={(e) => {
                        formik.setFieldValue("postal_code", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("postal_code")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <label htmlFor="phone">Phone *</label>

                    <InputText
                      placeholder="Enter Your Phone"
                      name="phone"
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("phone"),
                      })}
                      value={formik.values.phone}
                      onChange={(e) => {
                        formik.setFieldValue("phone", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("phone")}
                  </div>
                </div>
                {/* <div className="col-12 ">
              <div className="inputFormik">
                <label htmlFor="delivary_instractions">
                  Delivary Instractions
                </label>
                <InputTextarea
                  rows={5}
                  cols={30}
                  placeholder="Delivary Instractions"
                  name="delivary_instractions"
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("delivary_instractions"),
                  })}
                  value={formik.values.delivary_instractions}
                  onChange={(e) => {
                    formik.setFieldValue(
                      "delivary_instractions",
                      e.target.value
                    );
                  }}
                />
              </div>
            </div> */}
                <div className="col-12">
                  <button
                    name="login"
                    type="submit"
                    className="main_btn mt-3  font-medium"
                  >
                    Countinue to delivery
                  </button>
                </div>

                <div className="col-12">
                  <div className="inputFormik">
                    <div className="">
                      <Checkbox
                        inputId={"default_shipping"}
                        name="default_shipping"
                        value={formik.values.default_shipping}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "default_shipping",
                            e.target.checked
                          );

                          // console.log(e.target);
                        }}
                        checked={formik.values.default_shipping}
                      />
                      <label htmlFor={"default_shipping"} className="ml-2">
                        Save my information for faster checkout
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr className="  mt-5 " />
          <h2 className=" main_two mt-5 "> Shipping Address</h2>
          <p>Select the address that matches your card or payment method.</p>
          <div
            className={`accContainer flex flex-column   ${styles.bg_container}`}
          >
            {colors.map((ele) => {
              return (
                <div
                  key={ele.key}
                  className={`flex align-items-center ${styles.radio_div}`}
                >
                  <RadioButton
                    className={` Radio2 font-bold`}
                    // style={{ "--mainRadio": ele.key }}
                    inputId={ele.name}
                    name="category"
                    value={ele}
                    onChange={(e) => setSelectedColors(e.value)}
                    checked={selectedColors.name === ele.name}
                  />
                  <label htmlFor={ele.name} className="ml-5">
                    {ele.name}
                  </label>
                </div>
              );
            })}
          </div>
          <hr className="  mt-5 " />
          <h2 className=" main_two mt-5 "> Shipping Method</h2>
          <div
            className={`accContainer flex flex-column   ${styles.bg_container}`}
          >
            <h3 className={styles.radio_div}>Arrives by Monday, October 31</h3>
            <hr />
            <div className={"flex justify-content-between "}>
              <div className={styles.radio_div}>
                <h3>Delivery Charges</h3>
                <p className={"mt-2"}>Additional fees may apply</p>
              </div>
              <p className={`${styles.radio_div} font-bold`}>$15.00</p>
            </div>
          </div>
          <hr className="  mt-5 " />
        </div>
        <div className="col-12 md:col-4">
          <div className={styles.Subtotal}>
            <div className="grid align-items-center">
              <div className="col-12">
                <h3 className=" main_two">Order Summary</h3>
              </div>

              <div className={`col-12 ${styles.product_div}`}>
                <div className={`grid align-items-center`}>
                  <div className="col-12 md:col-10">
                    <div className=" flex align-items-center ">
                      <div className={styles.imageContainer}>
                        <Image
                          alt="Product"
                          src={"/images/18.jpg"}
                          layout="fill"
                          objectFit="fill"
                          objectPosition="center"
                        />
                      </div>
                      <div className={styles.productName}>
                        <h4>Luiz Vitton Lace Suit</h4>
                        <p>
                          <span>Color:</span> black
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-2">
                    <p>$120.00</p>
                  </div>
                </div>
              </div>
              <div className={`col-12 ${styles.product_div}`}>
                <div className={`grid align-items-center `}>
                  <div className="col-12 md:col-10">
                    <div className=" flex align-items-center ">
                      <div className={styles.imageContainer}>
                        <Image
                          alt="Product"
                          src={"/images/18.jpg"}
                          layout="fill"
                          objectFit="fill"
                          objectPosition="center"
                        />
                      </div>
                      <div className={styles.productName}>
                        <h4>Luiz Vitton Lace Suit</h4>
                        <p>
                          <span>Color:</span> black
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-2">
                    <p>$120.00</p>
                  </div>
                </div>
              </div>
              <div className={`col-12 ${styles.product_div}`}>
                <div className={`grid align-items-center `}>
                  <div className="col-12 md:col-10">
                    <div className=" flex align-items-center ">
                      <div className={styles.imageContainer}>
                        <Image
                          alt="Product"
                          src={"/images/18.jpg"}
                          layout="fill"
                          objectFit="fill"
                          objectPosition="center"
                        />
                      </div>
                      <div className={styles.productName}>
                        <h4>Luiz Vitton Lace Suit</h4>
                        <p>
                          <span>Color:</span> black
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-2">
                    <p>$120.00</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className={styles.order}>
              <div className="flex justify-content-between  align-items-center ">
                <h4>
                  Subtotal <span>(3 Items)</span>
                </h4>
                <p>$540.00</p>
              </div>
              <div className="flex justify-content-between  align-items-center ">
                <h4>Savings</h4>
                <p>-$30.00</p>
              </div>
              <hr />
              <div className="flex justify-content-between  align-items-center ">
                <h4>Shipping </h4>
                <p>$540.00</p>
              </div>
              <hr />
              <div className="flex justify-content-between  align-items-center ">
                <h4>Total </h4>
                <p>$540.00</p>
              </div>
              {/* <button className=" main_btn">Countinue to Checkout</button> */}
            </div>
          </div>
        </div>
        <form className="col-12 md:col-8" onSubmit={formik_credit.handleSubmit}>
          <h2 className=" main_two mt-5 "> Payment Method</h2>
          <p>All Transactions are scure and encrypted.</p>
          <div className={`${styles.bg_container} ${styles.pay_Now}`}>
            <div className={`flex align-items-center ${styles.radio_div2} `}>
              <RadioButton
                inputId="paytype1"
                name="paytype"
                value="Credit"
                className={` Radio2 font-bold`}
                onChange={(e) => SetPayType(e.value)}
                checked={paytype === "Credit"}
              />
              <label htmlFor="paytype1" className="ml-2">
                <h3>Credit Card</h3>
                <p>We accept all major credit cards </p>
              </label>
            </div>
            {paytype === "Credit" && (
              <div className={`grid ${styles.credit_info}`}>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <InputText
                      placeholder="Card Number"
                      name="card_number"
                      className={classNames({
                        "p-invalid": isForm_CreditFieldInvalid("card_number"),
                      })}
                      value={formik_credit.values.card_number}
                      onChange={(e) => {
                        formik_credit.setFieldValue(
                          "card_number",
                          e.target.value
                        );
                      }}
                    />
                    {getForm_CreditErrorMessage("card_number")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <InputText
                      placeholder="Name of card"
                      name="name_of_card"
                      className={classNames({
                        "p-invalid": isForm_CreditFieldInvalid("name_of_card"),
                      })}
                      value={formik_credit.values.name_of_card}
                      onChange={(e) => {
                        formik_credit.setFieldValue(
                          "name_of_card",
                          e.target.value
                        );
                      }}
                    />
                    {getForm_CreditErrorMessage("name_of_card")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik">
                    <InputText
                      placeholder="Expiration date"
                      name="exp_date"
                      className={classNames({
                        "p-invalid": isForm_CreditFieldInvalid("exp_date"),
                      })}
                      value={formik_credit.values.exp_date}
                      onChange={(e) => {
                        formik_credit.setFieldValue("exp_date", e.target.value);
                      }}
                    />
                    {getForm_CreditErrorMessage("exp_date")}
                  </div>
                </div>
                <div className="col-12  md:col-6">
                  <div className="inputFormik ">
                    <InputText
                      placeholder="Security Code"
                      name="security_code"
                      className={classNames({
                        "p-invalid": isForm_CreditFieldInvalid("security_code"),
                      })}
                      value={formik_credit.values.security_code}
                      onChange={(e) => {
                        formik_credit.setFieldValue(
                          "security_code",
                          e.target.value
                        );
                      }}
                    />
                    {getForm_CreditErrorMessage("security_code")}
                  </div>
                </div>
              </div>
            )}
            <hr />
            <div className={`flex align-items-center ${styles.radio_div2} `}>
              <RadioButton
                className={` Radio2 font-bold`}
                inputId="paytype2"
                name="paytype"
                value="Cach"
                onChange={(e) => SetPayType(e.value)}
                checked={paytype === "Cach"}
              />
              <label htmlFor="paytype2" className="ml-2">
                <h3>Cach on delivery</h3>
                <p>Pay with Cach upon delivery</p>
              </label>
            </div>
            <hr />
            <div className={`flex align-items-center ${styles.radio_div2} `}>
              <RadioButton
                className={` Radio2 font-bold`}
                inputId="paytype3"
                name="paytype"
                value="Paypal"
                onChange={(e) => SetPayType(e.value)}
                checked={paytype === "Paypal"}
              />
              <label htmlFor="paytype3" className="ml-2">
                <h3>Paypal</h3>
              </label>
            </div>
          </div>
          <button className=" main_btn" type="submit">
            {" "}
            Pay Now
          </button>
        </form>
        <div className="col-12 md:col-4">
          {/* <button>
            <LiaApplePay/>
          </button>
          <button>
            <FaGooglePay/>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
