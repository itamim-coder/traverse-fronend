import { baseApi } from "./baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userProfile: build.query({
        query: () => {
          return {
            url: `${USER_URL}/profile`,
            method: "GET",
          };
        },
        providesTags: ["user"],
      }),
  }),
});

export const { useUserProfileQuery } = userApi;
