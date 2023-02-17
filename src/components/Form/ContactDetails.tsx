import React, { useState } from "react";
import nameIcon from "../../assets/name.svg";
import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/phone.svg";
import companyIcon from "../../assets/company.svg";

function ContactDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  return (
    <div className="w-100 flex flex-col">
      <h3 className="font-sans not-italic mt-5 text-[#170F49] font-bold text-xl">
        Contact details
      </h3>
      <p className=" w-[500px] mt-3 text-[#6F6C90] leading-5">
        Please fill the form below to receive a quote for your project. Feel
        free to add as much detail as needed.
      </p>
      <div className="flex mt-10 gap-[40px]">
        <div className="w-[50%]">
          <label htmlFor="name" className="font-sans font-lg text-[#170F49]">
            Name
          </label>
          <div className="flex justify-between px-5 items-center w-[100%] h-[66px] rounded-full  mt-3 shadow-[rgba(50,_50,_105,_0.15)_0px_1px_4px_0px,_rgba(0,_0,_0,_0)_0px_0px_0px_0px] ">
            <input
              className="w-[100%] h-[100%] rounded-full  border-0 outline-0   bg-transparent"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <img src={nameIcon} alt="name" />
          </div>
        </div>
        {/* ///////////////// */}
        <div className="w-[50%]">
          <label htmlFor="name">Email</label>
          <div className="flex justify-between px-5 items-center w-[100%] h-[66px]  mt-3 rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_1px_4px_0px,_rgba(0,_0,_0,_0)_0px_0px_0px_0px]">
            <input
              className="w-[100%] h-[100%] rounded-full border-0 outline-0   bg-transparent"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <img src={emailIcon} alt="email" />
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////// */}
      <div className="flex mt-10 gap-[40px]">
        <div className="w-[50%]">
          <label htmlFor="name">Phone Number</label>
          <div className="flex justify-between px-5 items-center w-[100%] h-[66px] rounded-full  shadow-[rgba(50,_50,_105,_0.15)_0px_1px_4px_0px,_rgba(0,_0,_0,_0)_0px_0px_0px_0px]">
            <input
              className="w-[100%] h-[100%] rounded-full border-0 outline-0   bg-transparent"
              type="number"
              placeholder="Enter your Phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            <img src={phoneIcon} alt="phone" />
          </div>
        </div>
        {/* ///////////////// */}
        <div className="w-[50%]">
          <label htmlFor="name">Company</label>
          <div className="flex justify-between px-5 items-center  w-[100%] h-[66px] rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_1px_4px_0px,_rgba(0,_0,_0,_0)_0px_0px_0px_0px]">
            <input
              className="w-[100%] h-[100%] rounded-full border-0 outline-0   bg-transparent"
              type="text"
              placeholder="Enter your company name"
              value={company}
              onChange={handleCompanyChange}
            />
            <img src={companyIcon} alt="company" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
