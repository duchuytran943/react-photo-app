import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Huy Tran
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Photo App
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
