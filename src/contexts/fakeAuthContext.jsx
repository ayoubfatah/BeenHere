import { createContext, useContext, useReducer } from "react";

const AuthConext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const instialState = {
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { instialState };
    default:
      throw new Error("uknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    instialState
  );
  function login(email, pass) {
    if (email === FAKE_USER.email && pass === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthConext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthConext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthConext);
  if (context === undefined)
    throw Error("trying to access context outside its children");
  return context;
}

export { useAuth, AuthProvider };
