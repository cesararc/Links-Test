import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import { getListAllUser, deleteUser, changeVerification } from "../../actions/userActions";

class ListUser extends Component {
  componentDidMount() {
    this.getListUser();
  }

  componentDidUpdate(prevProps) {
    const { verification } = this.props.user;
    if (verification !== prevProps.user.verification) {
      this.getDepartments();
      this.props.changeVerification(false);
    }
  }

  getListUser = () => {
    this.props.getListAllUser();
  };

  handleClickDelete = (userId) => {
    this.props.deleteUser(userId);
  };

  render() {
    const { users } = this.props.user;

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>
                Acciones{" "}
                <Link
                  to="#"
                  className="btn btn-outline-primary"
                >
                  Agregar
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant="outline-primary"
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.handleClickDelete(user.id)
                    }
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

ListUser.propTypes = {
  getListAllUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  changeVerification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  getListAllUser,
  deleteUser,
  changeVerification,
})(withRouter(ListUser));
