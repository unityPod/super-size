import { Routes, Route, Link } from "react-router-dom";
import Login from "./component/Login/Login";
import { Home } from "./component/Home/Home";
import Registration from "./component/Registration/Registration";
import { AuthContextProvider } from "./component/AuthContext/AuthContext";
import Questionare from "./component/Registration/ui/Questionare";
import { RegistrationContextProvider } from "./component/Registration/RegistrationContext";

const App = () => {
  return (
    <RegistrationContextProvider>
      <AuthContextProvider>
        <Routes>
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Questionare />} />
        </Routes>
      </AuthContextProvider>
    </RegistrationContextProvider>
  );
};

export default App;
