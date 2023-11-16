import { baseApi } from "./baseApi";

const OTP_URL = "/otp";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendOtp: build.mutation({
      query: (data) => ({
        url: `${OTP_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["sendOtp"],
    }),
    verifyOtp: build.mutation({
      query: (data) => ({
        url: `${OTP_URL}/verify`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["verifyOtp"],
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation } = authApi;
