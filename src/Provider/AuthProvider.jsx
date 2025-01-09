import { createContext, useState } from "react";


const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);




  const authInfo = {
    user, setUser,
    loading, setLoading,

  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;