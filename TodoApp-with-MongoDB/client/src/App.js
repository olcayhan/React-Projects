// import needed library
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import AuthScreen from "./Screens/AuthScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import { useState } from "react";
import TodoList from "./Screens/TodoList";
import Important from "./Screens/Important";


export default function App() {

  // set user objects
  const [user, setUser] = useState(null);

  return (

    <Router>
      <Header user={user} setUser={setUser} />
      <main className="py-3">
        <Container>
          <Routes>

            <Route path="/signin" element={<AuthScreen setUser={setUser} />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/home" element={<TodoList user={user} />} />
            <Route path="/important" element={<Important/>} />

          </Routes>
        </Container>

      </main>
    </Router>
  );
}

