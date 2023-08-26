"use client";
import { Toast } from "primereact/toast";
import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { getLogin } from "../../store/AuthSlice";
// import Form from "react-bootstrap/Form";
// import "./login.css";
import { useFormik } from "formik";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useRouter } from "next/navigation";
import { InputTextarea } from "primereact/inputtextarea";
import Link from "next/link";

import { Checkbox } from "primereact/checkbox";
const EditAddress = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const toast = useRef(null);
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
        router.push("/profile/info");

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
  return (
    <div className="Address">
      <Toast ref={toast} />
      <h1 className=" main_two">Edit Address</h1>
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
                  // feedback={false}
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
                  // feedback={false}
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
                  // feedback={false}
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
                  // feedback={false}
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
                  // feedback={false}
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
            <div className="col-12  md:col-6">
              <div className="inputFormik">
                <label htmlFor="City">City *</label>
                <InputText
                  // feedback={false}
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
            <div className="col-12  md:col-6">
              <div className="inputFormik">
                <label htmlFor="state">State *</label>
                <InputText
                  // feedback={false}
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
            <div className="col-12  md:col-6">
              <div className="inputFormik">
                <label htmlFor="phone">Phone *</label>

                <InputText
                  // feedback={false}
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
            <div className="col-12  md:col-6">
              <div className="inputFormik">
                <label htmlFor="postal_code">Postal code *</label>
                <InputText
                  // feedback={false}
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
            <div className="col-12 ">
              <div className="inputFormik">
                <label htmlFor="delivary_instractions">
                  Delivary Instractions
                </label>
                <InputTextarea
                  rows={5}
                  cols={30}
                  // feedback={false}
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
            </div>

            <div className="col-12">
              <div className="inputFormik">
                <div className="">
                  <Checkbox
                    inputId={"default_shipping"}
                    // feedback={false}
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
                    Set as default shipping address
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="inputFormik">
                <div className="">
                  <Checkbox
                    inputId={"default_billing"}
                    // feedback={false}
                    name="default_billing"
                    value={formik.values.default_billing}
                    onChange={(e) => {
                      formik.setFieldValue("default_billing", e.target.checked);

                      // console.log(e.target);
                    }}
                    checked={formik.values.default_billing}
                  />
                  <label htmlFor={"default_billing"} className="ml-2">
                    Set as default billing address
                  </label>
                </div>
              </div>
            </div>
            <button name="login" type="submit" className="main_btn mt-3">
              Save
            </button>
            {/* <Link href={"/"} className="mt-4 font-bold">
                  Forget Your Password ?
                </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
