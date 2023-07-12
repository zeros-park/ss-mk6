import React from "react";
import styled, { CSSObject } from 'styled-components';
import CounterTestItem from "@/content/test-counter";
import { IStyledLayoutProps } from "@/types/global";
import ToggleButton from "@/frame/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";

const Wrapper = styled.section<IStyledLayoutProps>`${props => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: `${props.layout.headerHeightSize}px`,
    pointerEvents: 'none',
    overflowX: 'auto',
})}`

const Content = styled.div<IStyledLayoutProps>`${props => ({
    position: 'relative',
    pointerEvents: 'auto',
    marginLeft: `${props.layout.asideLeftSizeOptions.default}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#beb9c8',
})}`
const FlexArea = styled.div`
`
const Item = styled.span`
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;
    background: #ffffff;
`
const css: CSSObject = {
    backgroundColor: 'gray',
    color: 'white'
}
const Header: React.FC<IStyledLayoutProps> = ({ layout }) => {
    return (
        <Wrapper layout={layout}>
            <Content layout={layout}>
                <FlexArea>
                    <CounterTestItem></CounterTestItem>
                </FlexArea>
                <FlexArea>
                    <Item>
                        <ToggleButton
                            text={'영역 테스트 레이어 오픈'}
                            options={['center', 'default', true, '중앙/기본']}
                        >
                            <DimdLayerTestItem></DimdLayerTestItem>
                        </ToggleButton>
                        <ToggleButton
                            options="top"
                            text="모드"
                            // styledFocus="background-color: #a3f9be;"
                            styledFocus={css}
                        >
                            <span>Auth</span>
                        </ToggleButton>

                    </Item>
                    <Item>
                        <span>Auth</span>
                    </Item>
                </FlexArea>
            </Content>
        </Wrapper>
    )
}

export default Header;