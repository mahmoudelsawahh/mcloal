"use client";
// import Cookies from "js-cookie";
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
import Link from "next/link";

import { Checkbox } from "primereact/checkbox";

const Register = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  // const dispatch = useDispatch();
  const toast = useRef(null);
  // const EMptyInput = (mess) => {
  //   toast.current.show({
  //     severity: "error",
  //     summary: `${mess}`,
  //     life: 3000,
  //   });
  // };

  // const show = () => {
  //   toast.current.show({
  //     severity: "success",
  //     summary: "تم التجيل بنجاح",
  //     detail: formik.values.value,
  //   });
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
      email: "",
      agree: false,
    },
    validate: (data) => {
      let errors = {};
      if (!data.email) {
        errors.email = " Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email";
      }
      if (!data.name) {
        errors.name = "Name is required.";
      }
      if (!data.phone) {
        errors.phone = "Phone is required.";
      } else if (/\D/.test(data.phone)) {
        errors.phone = "Invalid Phone Number.";
      }
      if (!data.password) {
        errors.password = "Password is required.";
      }
      if (data.agree === false) {
        errors.agree = "You have to Agree";
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
    <>
      <Toast ref={toast} />
      {/* <h1 className="text-center main-title">Pharmacy Dashboard </h1> */}
      <div className={"LoginPage"}>
        <div className="container">
          <h1 className="text-center  main_two font-bold">
            Create Your Account
          </h1>
          <p className="text-center">
            Already have an account ?{" "}
            <Link href={"/auth/login"} className=" font-bold">
              Login
            </Link>
          </p>
          <div className=" grid justify-content-center align-items-center mt-4">
            <div className="col-12 md:col-4 Login-card">
              <form onSubmit={formik.handleSubmit} className="grid  gap-2">
                <div className="col-12">
                  <div className="inputFormik">
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
                <div className="col-12">
                  <div className="inputFormik">
                    <InputText
                      // feedback={false}
                      placeholder="Enter Your Email"
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
                <div className="col-12">
                  <div className="inputFormik">
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
                <div className="col-12">
                  <div className="inputFormik">
                    <Password
                      placeholder="Password"
                      toggleMask
                      name="password"
                      className={`${classNames({
                        "p-invalid": isFormFieldInvalid("password"),
                      })} w-full `}
                      value={formik.values.password}
                      // feedback={false}
                      onChange={(e) => {
                        formik.setFieldValue("password", e.target.value);
                      }}
                    />
                    {getFormErrorMessage("password")}
                  </div>
                </div>
                <div className="col-12">
                  <div className="inputFormik">
                    <div className="">
                      <Checkbox
                        inputId={"agree"}
                        // feedback={false}
                        name="agree"
                        value={formik.values.agree}
                        onChange={(e) => {
                          formik.setFieldValue("agree", e.target.checked);
                        }}
                        checked={formik.values.agree}
                      />
                      <label htmlFor={"agree"} className="ml-2">
                        Yes, I agree with <span>Privacy Policy</span> and{" "}
                        <span>Tearms of Use</span>
                      </label>
                    </div>
                    {getFormErrorMessage("agree")}
                  </div>
                </div>
                <button name="login" type="submit" className="main_btn w-full">
                  Create Account
                </button>
                {/* <Link href={"/"} className="mt-4 font-bold">
                  Forget Your Password ?
                </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
