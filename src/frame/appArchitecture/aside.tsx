import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import YScrollWrapper from "@/frame/appArchitecture/YScrollWrapper";
import { dcwStyled } from "@/frame/designComponentWrapper";

// const Wrapper = styled.section<IStateLayout>`${({ layout }) => ({
//     position: 'absolute',
//     pointerEvents: 'none',
//     top: 0,
//     left: 0,
//     width: `${layout.asideLeftSizeOptions.default}px;`,
//     height: '100%',
//     [`@media screen and (max-width: ${layout.mediaWidthOptions.simple}px)`]: {
//         width: `${layout.asideLeftSizeOptions.simple}px`
//     },
//     [`@media screen and (max-width: ${layout.mediaWidthOptions.minimal}px)`]: {
//         display: 'none'
//     }
// })}`

const Wrapper = styled.section`${() => dcwStyled(({ layout, colorMode }) => ({
    default: {
        position: 'absolute',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: `${layout.asideLeftSizeOptions.default}px;`,
        height: '100%',
    },
    simple: {
        width: `${layout.asideLeftSizeOptions.simple}px`
    },
    minimal: {
        display: 'none'
    },
}))}`
const Content = styled.div`${() => dcwStyled(dcwProps => ({
    default: {
        position: 'relative',
        height: '100%',
        marginTop: `${dcwProps.layout.headerHeightSize}px;`,
    }
}))}`

const Aside: IReactFC = ({ children }) => {
    return (
        <Wrapper>
            <Content>
                <YScrollWrapper>
                    {children}
                </YScrollWrapper>
            </Content>
        </Wrapper>
    );
}

export default Aside;