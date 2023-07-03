import { api, configToken, formData } from "../../helpers/request";

export const authSlice = {
  state: {
    student: {},
    studentModal: false,
    studentProfile: {},
    signInList: {},
  },
  reducers: {
    // checkIsAuthenticated: (state) => {
    //   const token = localStorage.getItem("@token");
    //   const isTokenExist = !!token;
    //   if (isTokenExist) {
    //     setAuthHeader("@token");
    //   }
    //   return {
    //     ...state,
    //     isAuthenticated: isTokenExist,
    //     isAuthLoading: false,
    //   };
    // },

    studentProfileFunction: (state, payload) => ({
      ...state,
      studentProfile: payload,
    }),
  },
  effects: {
    async registerStudent(payload) {
      try {
        api.defaults.headers.common["Authorization"] = null;
        const response = await api.post(
          "/user/sign-up-student",
          formData(payload)
        );
        const responsData = await api.post("/user/sign-in", formData(payload));
        localStorage.setItem("@otp_token", responsData.data.data.token);
        setAuthHeader("@otp_token");
      } catch (e) {
        console.log(e);
      }
    },

    async conFirmNumber(payload) {
      try {
        const response = await api.post("/user/send-sms-code", payload);
        console.log({ response });
      } catch (e) {
        console.log(e);
      }
    },
    async getStudentProfile() {
      try {
        setAuthHeader("@otp_token");
        const response = await api.get("/user/profile");
        this.studentProfileFunction(response.data.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};

const setAuthHeader = (key) => {
  const token = localStorage.getItem(key);

  if (!token) {
    throw Error("Token not exist");
  }
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
