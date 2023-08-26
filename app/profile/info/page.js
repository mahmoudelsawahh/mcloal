"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Info = () => {
  const [name, setName] = useState("User Full Name");
  const [phone, setPhone] = useState("98467332324");
  const [email, setEmail] = useState("Text@gmail.com");
  const [Password, setPassword] = useState("******");
  const router = useRouter();
  return (
    <div className={styles.Info}>
      <h1 className=" main_two">My Info</h1>
      <h2 className=" main_two">Contact Info</h2>
      <div className={styles.Contact_Info}>
        <p>Your Name</p>
        <div
          className={`flex justify-content-between align-items-center gap-3 ${styles.info_input}`}
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.change_Btn}>Change</button>
        </div>
      </div>
      <div className={styles.Contact_Info}>
        <p>Email Address</p>
        <div
          className={`flex justify-content-between align-items-center gap-3 ${styles.info_input}`}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className={styles.change_Btn}>Change</button>
        </div>
      </div>
      <div className={styles.Contact_Info}>
        <p>Phone Number</p>
        <div
          className={`flex justify-content-between align-items-center gap-3 ${styles.info_input}`}
        >
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className={styles.change_Btn}>Change</button>
        </div>
      </div>
      <div className={styles.Contact_Info}>
        <p>Password</p>
        <div
          className={`flex justify-content-between align-items-center gap-3 ${styles.info_input}`}
        >
          <input
            type="text"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.change_Btn}>Change</button>
        </div>
      </div>
      <h2 className=" main_two mt-3">Address</h2>

      <div className="grid justify-content-between align-content-center ">
        <div className={`col-12 md:col-6 ${styles.Address}`}>
          <div className={styles.Address_cont}>
            <h3 className=" main_two">Erma Johnson</h3>
            <p>987567685</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident, sed. Ab, pariatur alias, saepe animi sapiente
              exercitationem laudantium maiores
            </p>
            <div className={styles.location}>
              <p>Home</p>
              <p>Office</p>
            </div>
            <div className={styles.SaveBtn}>
              <button>Remove</button> |{" "}
              <button
                onClick={() => {
                  router.push("/profile/info/edit-address");
                }}
              >
                Edite
              </button>{" "}
              | <button>Set as default</button>
            </div>
          </div>
        </div>
        <div className={`col-12 md:col-6 ${styles.Address}`}>
          <div className={styles.Address_cont}>
            <h3 className=" main_two ">Erma Johnson</h3>
            <p>987567685</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident, sed. Ab, pariatur alias, saepe animi sapiente
              exercitationem laudantium maiores
            </p>
            <div className={styles.location}>
              <p>Home</p>
              <p>Office</p>
            </div>
            <div className={styles.SaveBtn}>
              <button>Remove</button> |{" "}
              <button
                onClick={() => {
                  router.push("/profile/info/edit-address");
                }}
              >
                Edite
              </button>{" "}
              | <button>Set as default</button>
            </div>
          </div>
        </div>
        <div className={`col-12 md:col-6 ${styles.Address}`}>
          <div className={styles.Address_cont}>
            <h3 className=" main_two ">Erma Johnson</h3>
            <p>987567685</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident, sed. Ab, pariatur alias, saepe animi sapiente
              exercitationem laudantium maiores
            </p>
            <div className={styles.location}>
              <p>Home</p>
              <p>Default billing Address</p>
            </div>
            <div className={styles.SaveBtn}>
              <button>Remove</button> |{" "}
              <button
                onClick={() => {
                  router.push("/profile/info/edit-address");
                }}
              >
                Edite
              </button>{" "}
              | <button>Set as default</button>
            </div>
          </div>
        </div>
        <div className={`col-12 md:col-6 ${styles.Address}`}>
          <div className={styles.Address_cont}>
            <h3 className=" main_two">Erma Johnson</h3>
            <p>987567685</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident, sed. Ab, pariatur alias, saepe animi sapiente
              exercitationem laudantium maiores
            </p>
            <div className={styles.location}>
              <p>Home</p>
            </div>
            <div className={styles.SaveBtn}>
              <button>Remove</button> |{" "}
              <button
                onClick={() => {
                  router.push("/profile/info/edit-address");
                }}
              >
                Edite
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className=" main_btn"
        onClick={() => {
          router.push("/profile/info/address");
        }}
      >
        Add New Address
      </button>
    </div>
  );
};

export default Info;
