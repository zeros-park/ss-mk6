import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import FullYScrollWrapper from "@/frame/appArchitecture/FullYScrollWrapper";
import { dcwStyled } from "@/frame/designComponentWrapper";

const Wrapper = styled.section`${{
    position: 'absolute',
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
                <FullYScrollWrapper>
                    {children}
                </FullYScrollWrapper>
            </Content>
        </Wrapper>
    );
}

export default Main;