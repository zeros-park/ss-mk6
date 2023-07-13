import React from "react";
import styled from 'styled-components';
import { IReactFC, IStyledLayoutProps } from '@/types/global';
import ToggleButton from "@/frame/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";
////////////////////////////
// Style
////////////////////////////
const Wrapper = styled.section<IStyledLayoutProps>`${props => ({
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${props.layout.asideLeftSizeOptions.default}px`,
    height: `${props.layout.headerHeightSize}px`,
    [`@media (prefers-color-scheme: dark)`]: {
        backgroundColor: 'yellow'
    },
})}`

const Content = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
`

////////////////////////////
// TSX
////////////////////////////
const Logo: IReactFC<IStyledLayoutProps> = ({ layout, children }) => {
    return (
        <Wrapper layout={layout}>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Logo;