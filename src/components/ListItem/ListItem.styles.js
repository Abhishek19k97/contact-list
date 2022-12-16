import styled from "styled-components";

export const ListItemWrapper = styled.section`
    margin: 10px 30px;
    /* width: 100%; */
    .account-info-wrapper{
        /* margin: 0.4em 0.7em; */
        border-radius: 10px 10px;
        background-color: #fafafa;
        /* border: 0.5px solid #C9C9C9; */
        background-color: #ffffff;
        /* Box-Shadow */
        -webkit-box-shadow: 0px 0px 20px #25405f2a;
        -moz-box-shadow: 0px 0px 20px #25405f2a;
        box-shadow: 0px 0px 20px #25405f2a;
    }
    .account-info-container{
        display: inline-flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
    }
    .account-info-header{
        /* font-weight: 600; */
        font-size: 14px;
        text-align: left;
    }
    .account-info-footer{
        color: #989898;
        font-size: 12px;
        font-weight: 600;
        text-align: left;
    }
`;



