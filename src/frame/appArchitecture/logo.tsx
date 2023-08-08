import React from "react";
import styled from 'styled-components';
import { IReactFC } from '@/types/global';
import { dcwStyled } from "@/frame/designComponentWrapper";
////////////////////////////
// Style
////////////////////////////
const Wrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${layout.asideLeftSizeOptions.default}px`,
        height: `${layout.headerHeightSize}px`,
    }
}))}`

const Content = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
`

////////////////////////////
// TSX
////////////////////////////
const Logo: IReactFC = ({ children }) => {
    console.log('zeros logo draw!!!')
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Logo;