import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Navwrapper className="navbar navbar-sm-expand ">
      <div className="container-fluid"></div>
    </Navwrapper>
  );
}
export default Navbar;

const Navwrapper = styled.nav`
  background: #000000 !important;
  height: 3rem;
`;
