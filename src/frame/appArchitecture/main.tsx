import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import YScrollWrapper from "@/frame/appArchitecture/YScrollWrapper";
import { dcwStyled } from "@/frame/designComponentWrapper";

const Wrapper = styled.section`${{
    position: "absolute",
    pointerEvents: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
}}`
const Content = styled.main`${() => dcwStyled(({ layout }) => ({
    default: {
        position: 'relative',
        height: '100%',
        marginLeft: `${layout.asideLeftSizeOptions.default}px`,
        marginTop: `${layout.headerHeightSize}px`,
    },
    simple: {
        marginLeft: `${layout.asideLeftSizeOptions.simple}px`
    },
    minimal: {
        marginLeft: 0
    }
}))}`
const Main: IReactFC = ({ children }) => {
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

export default Main;