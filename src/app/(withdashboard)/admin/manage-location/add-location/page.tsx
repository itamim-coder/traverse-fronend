"use client";

import Form from "@/app/components/Forms/form";
import FormFileInput from "@/app/components/Forms/FormFileInput";
import FormInput from "@/app/components/Forms/FormInput";
import UploadImage from "@/app/components/ui/UploadImage";
import { uploadImageToCloudinary } from "@/helpers/imgUpload/imgUpload";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  image: string;
};
const AddLocation = () => {
  const [showName, setShowName] = useState({});
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(data);
    try {
      const cloudinaryResponse = await uploadImageToCloudinary(showName);
      console.log(cloudinaryResponse);
    } catch (err) {}
  };
  return (
    <div>
      <p>Add New Location</p>
      <div className="flex justify-center">
        <Form submitHandler={onSubmit}>
          <div>
            <FormInput
              name="name"
              type="text"
              size="large"
              label="Add Location Name"
              className=" px-4 py-3 rounded border-2 focus:dark:border-violet-400"
            />
          </div>
          <div className="my-4">
            <div className="my-10 flex justify-center">
              <label
                className="flex h-full w-max items-end gap-4 rounded-md bg-cyan-500 px-6 py-4 text-white active:ring-4 active:ring-cyan-200"
                htmlFor="file"
              >
                <svg
                  width={30}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Complete">
                      <g id="upload">
                        <g>
                          <path
                            d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                          <g>
                            <polyline
                              data-name="Right"
                              fill="none"
                              id="Right-2"
                              points="7.9 6.7 12 2.7 16.1 6.7"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            ></polyline>
                            <line
                              fill="none"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="12"
                              x2="12"
                              y1="16.3"
                              y2="4.8"
                            ></line>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="text-lg font-medium">
                  {" "}
                  {showName.name ? showName.name : "Upload"}
                </p>
              </label>
              <input
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const imageFile = e.target.files[0];
                    setShowName(imageFile);
                  }
                }}
                className="hidden"
                id="file"
                type="file"
              />
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddLocation;
