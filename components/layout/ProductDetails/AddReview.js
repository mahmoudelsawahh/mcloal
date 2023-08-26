"use client";
import styles from "./productDetails.module.css";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useRouter } from "next/navigation";
import { InputTextarea } from "primereact/inputtextarea";
import { InputSwitch } from "primereact/inputswitch";
import { Rating } from "primereact/rating";
// import { useRef } from "react";
// import Link from "next/link";
const AddReview = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      rate: null,
      name: "",
      email: "",
      title: "",
      review: "",
      anonymous: false,
    },
    validate: (data) => {
      let errors = {};
      if (!data.name) {
        errors.name = " Name is required.";
      }
      // if (!data.rate) {
      //   errors.rate = " Rate is required.";
      // }

      if (!data.email) {
        errors.email = " Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email";
      }
      // if (!data.title) {
      //   errors.title = " Title is required.";
      // }
      // if (!data.review) {
      //   errors.review = " REview is required.";
      // }
      return errors;
    },
    onSubmit: (data) => {
      if (data) {
        router.push("/product/name/10/review/success");
        // console.log(data);

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
    <div className={styles.AddReview}>
      <form onSubmit={formik.handleSubmit} className="grid  ">
        <div className="col-12 mt-5 ">
          <div className={"Rate_Sec_Review"}>
            <Rating
              value={formik.values.rate}
              name="rate"
              className={classNames({
                "p-invalid": isFormFieldInvalid("rate"),
              })}
              onChange={(e) => {
                formik.setFieldValue("rate", e.value);
              }}
              stars={5}
            />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="inputFormik">
            <label htmlFor="name"> Name *</label>
            <InputText
              placeholder="Enter Your Name"
              name="name"
              className={classNames({
                "p-invalid": isFormFieldInvalid("name"),
              })}
              value={formik.values.name}
              onChange={(e) => {
                formik.setFieldValue("name", e.target.value);
              }}
            />
            {getFormErrorMessage("name")}
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="inputFormik">
            <label htmlFor="email">Email * </label>
            <InputText
              placeholder="Your Email address"
              name="email"
              className={classNames({
                "p-invalid": isFormFieldInvalid("email"),
              })}
              value={formik.values.email}
              onChange={(e) => {
                formik.setFieldValue("email", e.target.value);
              }}
            />
            {getFormErrorMessage("email")}
          </div>
        </div>
        <div className="col-12 ">
          <div className="inputFormik">
            <label htmlFor="title">Add a Title </label>
            <InputText
              placeholder="Give Your Review Title "
              name="title"
              className={classNames({
                "p-invalid": isFormFieldInvalid("title"),
              })}
              value={formik.values.title}
              onChange={(e) => {
                formik.setFieldValue("title", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-12 ">
          <div className="inputFormik">
            <label htmlFor="review">Your Review </label>
            <InputTextarea
              rows={5}
              cols={10}
              placeholder="Write a Review"
              name="review"
              className={classNames({
                "p-invalid": isFormFieldInvalid("review"),
              })}
              value={formik.values.review}
              onChange={(e) => {
                formik.setFieldValue("review", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="inputFormik">
            {/* anonymous */}
            <label htmlFor="anonymous">Anonymous Review </label>
            <InputSwitch
              className={classNames({
                "p-invalid": isFormFieldInvalid("anonymous"),
              })}
              name="anonymous"
              checked={formik.values.anonymous}
              onChange={(e) => formik.setFieldValue("anonymous", e.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="flex align-items-center">
            <button type="submit" className=" main_btn mr-3">
              {" "}
              Submit Review
            </button>
            <button
              onClick={() => router.back()}
              className={`main_btn ${styles.Cancel}`}
            >
              {" "}
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
