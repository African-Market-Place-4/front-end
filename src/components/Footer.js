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
    background-color: #fcd5ce;
    flex-direction:column;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;

    address{
        display:flex;
        flex-direction:column;
    }
    p {
        font-weight: bold;
        font-size: 1em;
    }
`