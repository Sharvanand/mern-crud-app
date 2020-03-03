import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

import "./App.css";
import AppNavbar from "./components/AppNavbar";
import EmployeeList from "./components/EmployeeList";
import EmpModal from "./components/EmpModal";

function App() {
  return (
    <div>
      <AppNavbar />
      <Container>
        <EmpModal />
        <EmployeeList />
      </Container>
    </div>
  );
}

export default App;
