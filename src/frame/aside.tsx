import React from "react";
import styled from 'styled-components';
import BlockItem from "@/content/blockItem";
import YScrollWrapper from "@/content/YScrollWrapper";
import Link from "next/link";
import { IStyledLayoutProps } from "@/types/global";
import ToggleButton from "@/frame/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";

const Wrapper = styled.section<IStyledLayoutProps>`${({ layout }) => ({
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    left: 0,
    width: `${layout.asideLeftSizeOptions.default}px;`,
    height: '100%',
    [`@media screen and (max-width: ${layout.mediaWidthOptions.simple}px)`]: {
        width: `${layout.asideLeftSizeOptions.simple}px`
    },
    [`@media screen and (max-width: ${layout.mediaWidthOptions.minimal}px)`]: {
        display: 'none'
    }
})}`
const Content = styled.div<IStyledLayoutProps>`${({ layout }) => ({
    position: 'relative',
    height: '100%',
    marginTop: `${layout.headerHeightSize}px;`,
})}`

const LinkStyle = styled.span`${{
    textDecoration: 'underline',
    ":hover": {
        fontWeight: 'bold'
    }
}}`

const Aside: React.FC<IStyledLayoutProps> = ({ layout }) => {
    return (
        <Wrapper layout={layout}>
            <Content layout={layout}>
                <YScrollWrapper layout={layout}>
                    <BlockItem text={'ai 1'}>
                        <Link href="/">
                            <LinkStyle>home</LinkStyle>
                        </Link>
                    </BlockItem>
                    <BlockItem text={'ai 2'}>
                        <Link href="/about">
                            <LinkStyle>about</LinkStyle>
                        </Link>
                    </BlockItem>
                    <BlockItem text={'ai 3'}>
                        <Link href="/test">
                            <LinkStyle>test</LinkStyle>
                        </Link>
                    </BlockItem>
                    <BlockItem text={'ai 4'}>
                        <ToggleButton
                            text={'영역 테스트 레이어 오픈'}
                            options={['center', 'default', true, '중앙/기본']}
                        >
                            <DimdLayerTestItem></DimdLayerTestItem>
                        </ToggleButton>
                    </BlockItem>
                    <BlockItem text={'ai 5'}></BlockItem>
                    <BlockItem text={'ai 6'} />
                    <BlockItem text={'ai 7'} />
                    <BlockItem text={'ai 8'} />
                    <BlockItem text={'ai 9'} />
                    <BlockItem text={'ai 10'} />
                    <BlockItem text={'ai 11'} />
                    <BlockItem text={'ai 12'} />
                    <BlockItem text={'ai 13'} />
                    <div>end</div>
                </YScrollWrapper>
            </Content>
        </Wrapper>
    );
}

export default Aside;