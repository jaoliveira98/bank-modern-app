import React from "react";
import apple from "../assets/apple.svg";
import bill from "../assets/bill.png";
import google from "../assets/google.svg";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <article id="product" className={layout.sectionReverse}>
      <figure className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="Billing software dashboard"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </figure>

      <article
        id="product"
        role="region"
        aria-labelledby="product-heading"
        className={layout.sectionInfo}
      >
        <h2 role="heading" aria-level="2" className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="Download from Apple App Store"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="Download from Google Play Store"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </article>
    </article>
  );
};

export default Billing;
