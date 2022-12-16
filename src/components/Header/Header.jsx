import React from "react";
// import "antd/dist/antd.css";
import { HeaderWrapper } from "./Header.styles";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderWrapper>
      <div className="header">
        <Row justify="space-between" align="middle">
          <Col>
          <span className="header-logo-wrapper" onClick={()=>navigate(`/`)}>
            <span className="header-logo-left">Contact</span>
            <span className="header-logo-right">List</span>
          </span>
          </Col>
          <Col>
          <button className="add-contact-button" onClick={()=>navigate(`/add-contact`)}>
            Add Contact
          </button>
          </Col>
        </Row>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
