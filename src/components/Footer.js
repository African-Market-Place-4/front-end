import React from "react";
import styled from 'styled-components';

export default function Footer(props) {
    return(
        <FooterStyle>
            <h4>Contact Us</h4>
            <address>
                <p>africanmarket@africa.org</p>
                <p>+1(234)567-8910</p>
                <p>123 Market Street<br></br>Sahara, CA 98765</p>
            </address>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    background-color:rgba(14, 12, 12, 0.956);
    color:white;
    flex-direction:column;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    margin:0;

    address{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    p {
        font-weight: bold;
        font-size: 1em;
    }
`