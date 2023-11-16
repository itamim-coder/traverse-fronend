"use client";
import { useVerifyOtpMutation } from "@/redux/api/otpApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";

const Verify = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const inputRefs = useRef([]);
  const router = useRouter();
  const { email: dt } = useAppSelector((state) => state.user);
  // Access the parameters from the URL
  const Email = dt?.email;

  const maskedEmail = Email?.replace(/(?<=.{2}).(?=[^@]*@)/g, "*");

  const handleInputChange = (e, index) => {
    const newValue = e.target.value;
    setVerificationCode((prevCode) => {
      const updatedCode = prevCode.split("");
      updatedCode[index] = newValue;
      return updatedCode.join("");
    });

    if (index < inputRefs.current.length - 1 && newValue !== "") {
      inputRefs.current[index + 1].focus();
    }
  };
  const [verifyOtp] = useVerifyOtpMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      otp: verificationCode,
      email: Email,
    };
    verifyOtp(data);
    console.log(data);
  };
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {maskedEmail}</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs my-4">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="w-16 h-16">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        maxLength={1}
                        name="otp"
                        onChange={(e) => handleInputChange(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-5">
                  <div>
                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
