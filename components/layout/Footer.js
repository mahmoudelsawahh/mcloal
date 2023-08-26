"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer margin_top">
      <div className="container">
        <div className="grid">
          <div className="col-12 md:col-3">
            <Link href={"/"} className="Logo_footer">
              Logo
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              voluptate odit magni .
            </p>
          </div>
          <div className="col-12 md:col-2">
            <div className="footer_Links">
              <h4>Company</h4>
              <Link href={"/"}>About</Link>
              <Link href={"/store/men"}>All Product</Link>
              <Link href={"/"}>location</Link>
              <Link href={"/"}>FAQ</Link>
              <Link href={"/"}>Contact Us</Link>
            </div>
          </div>
          <div className="col-12 md:col-2">
            <div className="footer_Links">
              <h4>Delivery & Collection</h4>
              <Link href={"/"}>How to Return</Link>
              <Link href={""}>Return Policy</Link>
              <Link href={"/"}>Refunds</Link>
              <Link href={"/"}>Delevary FAQs</Link>
              <Link href={"/"}>Site Map</Link>
            </div>
          </div>
          <div className="col-12 md:col-2">
            <div className="footer_Links">
              <h4>Help</h4>
              <Link href={"/"}>Security</Link>
              <Link href={""}>Privacy</Link>
              <Link href={"/"}>Accessibility</Link>
              <Link href={"/"}>Terms & Conditions</Link>
              <Link href={"/"}>Size Guide</Link>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className="footer_Links">
              <h4>Newsletter</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                omnis accusamus
              </p>

              <div className={"ask"}>
                <input type="text" placeholder="Your Email ..." id="ask_Qu" />
                <label htmlFor="ask_Qu">
                  {" "}
                  <button>Subscribe</button>
                </label>
              </div>
              <h4 className="mt-5">We Accept</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
