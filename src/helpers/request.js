import axios from "axios";

export const baseUrl = `https://tutor.shini.uz`;
const url = baseUrl + `/api`;

export const api = axios.create({
  baseURL: url,
});

const Token = localStorage.getItem("@otp_token");

export const configToken = {
  headers: {
    Authorization: `Bearer ${Token}`,
    Accept: "application/json",
  },
};

api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

export const formData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;

  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }

      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        formData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
};
