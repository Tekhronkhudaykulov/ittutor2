import { api } from "../../helpers/request";

export const TeacherSlice = {
  state: {
    teachersList: [],
    teacherById: {},
  },
  reducers: {
    getTeachersFunction: (state, payload) => {
      return {
        ...state,
        teachersList: payload,
      };
    },
    getTeacherByIdFunction: (state, payload) => {
      return {
        ...state,
        teacherById: payload,
      };
    },
  },
  effects: {
    async getTeachersLoad(payload) {
      const response = await api.get(`/tutor`, payload);
      this.getTeachersFunction(response.data.data);
    },
    async getTeachersByIdLoad(id) {
      const response = await api.get(`/tutor/view?id=${id}`);
      this.getTeacherByIdFunction(response.data.data);
    },
  },
};
