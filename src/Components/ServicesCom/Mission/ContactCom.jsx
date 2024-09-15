import React from "react";

const ContactCom = () => {
  return (
    <section>
      <div className="container m-auto p-2 md:p-8 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4">
        <h3 className="text-4xl mb-4 ">
          Connect with
          <br /> Confidence
        </h3>
        </div>
        <div className="px-4">
        <p className="text-[1.1rem] text-[#707070]">
          Contact us today to discuss your specific needs and discover how
          SafariLink ISP’s Mission-Critical Communication Solutions can empower
          your organization’s success.
        </p>
        </div>
        <div className="p-4 text-center">
        <button className="bg-gradient-to-r from-[#3752a3] to-[#096976] w-full text-center py-3 px-16 rounded-lg mt-12 text-white">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default ContactCom;
