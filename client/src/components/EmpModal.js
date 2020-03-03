import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { addEmployee } from "../actions";

class EmpModal extends Component {
  state = {
    modal: false,
    employee: "",
    position: "",
    salary: null
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const newEmployee = {
      employee: this.state.employee,
      position: this.state.position,
      salary: this.state.salary
    };
    this.props.addEmployee(newEmployee);
    this.toggle();
  };
  render() {
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add New Employee
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>New Employee Detailes</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="employeeName">Employee Name </Label>
                <Input
                  type="text"
                  name="employee"
                  id="employeeName"
                  placeholder="Enter employee name..."
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="employeePosition">Position </Label>
                <Input
                  type="text"
                  name="position"
                  id="employeePosition"
                  placeholder="Employee Position..."
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="employeeSalary">Salary </Label>
                <Input
                  type="number"
                  name="salary"
                  id="employeeSalary"
                  placeholder="Employee Salary..."
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color="dark" block style={{ marginTop: "2rem" }}>
                Add Employee
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    newEmp: state.employees
  };
};
export default connect(mapStateToProps, { addEmployee })(EmpModal);
