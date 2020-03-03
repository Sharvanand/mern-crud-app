import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import { getEmployees, deleteEmployee } from "../actions";
import { connect } from "react-redux";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }
  renderList() {
    return this.props.employee.employees.map(emp => {
      return (
        <div key={emp._id}>
          <Card style={{ marginBottom: "0.5rem" }}>
            <CardBody>
              <CardTitle>Employee Name : {emp.employee}</CardTitle>
              <CardSubtitle style={{ marginBottom: ".5rem" }}>
                Position : {emp.position}
              </CardSubtitle>
              <CardSubtitle style={{ marginBottom: ".5rem" }}>
                Salary : <span>$ </span>
                {emp.salary}
                <span>.00</span>
              </CardSubtitle>
              <Button
                color="danger"
                onClick={this.onDeleteClick.bind(this, emp._id)}
              >
                Delete
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    });
  }

  onDeleteClick(id) {
    this.props.deleteEmployee(id);
  }

  render() {
    return (
      <Container>
        <div>{this.renderList()}</div>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return { employee: state.employees };
};
export default connect(mapStateToProps, { getEmployees, deleteEmployee })(
  EmployeeList
);
