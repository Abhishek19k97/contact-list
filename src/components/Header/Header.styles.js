import styled from "styled-components";

export const HeaderWrapper = styled.div`
  z-index: 1000;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  background-color: #E5E5E5; 
  .header {
    color: #000000;
    width: 100%;
  }
  .header-logo-wrapper{
    cursor: pointer;
    font-size: 25px;
    font-weight: 700;
  }
  .header-logo-left{
    color: #F7A640;
    
  }
  .header-logo-right{
    color: #790044;
  }
  .add-contact-button{
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    color: rgb(255,255,255);
    background-color: rgb(46,84,122);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 13%) 0px 2px 2px 3px;
    cursor: pointer;
    white-space: nowrap;
    :hover {
        transform: scale(0.99);
      }
  }
`;
