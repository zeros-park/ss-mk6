import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    ${props => `
        background-color: green;
        position: absolute;
        z-index: 300;
        top: 0;
        left: 0;
        width: ${props.layout.asideLeftSizeOptions.default}px;
        height: ${props.layout.headerHeightSize}px;

        @media (prefers-color-scheme: dark) {
            background-color: yellow;
        }
    `}
`

const Content = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
`

const AsideSVG = styled.svg`
    width: 30px;
    height: 30px;
    vertical-align: middle;
`

const clickLogo = (el) => {
    console.log(el);
    alert('oops aside!!')
}
const Logo = ({ layoutOptions }) => {
    return (
        <Wrapper className="_logo" layout={layoutOptions}>
            <Content>
                <button onClick={clickLogo}>
                    <AsideSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <rect x="0" y="6" width="30" height="2" rx="2" />
                        <rect x="0" y="13" width="30" height="2" rx="2" />
                        <rect x="0" y="20" width="30" height="2" rx="2" />
                    </AsideSVG>
                </button>
                <span>LOGO</span>
            </Content>
        </Wrapper>
    );
}

export default Logo;