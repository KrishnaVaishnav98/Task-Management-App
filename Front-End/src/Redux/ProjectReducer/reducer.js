import { ADD_PROJECT, GET_PROJECTS, PROJECT_ERROR, PROJECT_LOADING } from "./actionType";

const initState = {
  projects: [],
  loading: false,
  error: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PROJECT_LOADING:
      return { ...state, loading: true, error: false, projects: [] };

    case GET_PROJECTS:
      return { ...state, loading: false, error: false, projects: payload };

    case ADD_PROJECT:
      return { ...state, loading: false, error: false };

    case PROJECT_ERROR:
      return { ...state, loading: false, error: true, projects: [] };

    default:
      return state
  }
};
