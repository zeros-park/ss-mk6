import DimdLayerTestItem from "@/content/test-dimdLayer";
import ToggleButton from "@/frame/appArchitecture/floatingLayer/toggleButton";
import { dcwStyled } from "@/frame/designComponentWrapper";
import { IReactFC } from "@/types/global";
import React from "react";
import styled from 'styled-components';


const Content = styled.div`${() => dcwStyled(({ layout }) => ({
    default: {
        position: 'relative',
        height: `${layout.headerHeightSize}px`,
        display: 'flex',
        alignItems: 'center',
    }
}))}`
const Logo = styled.span`${() => dcwStyled(() => ({
    default: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        height: '100%'
    },
}))}`

const AsideSVG = styled.svg`
    width: 30px;
    height: 30px;
    vertical-align: middle;
`
const LogoIcon: IReactFC<{ onClick: React.MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => {

    return (
        <Content>
            <button onClick={onClick}>
                <AsideSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <rect x="0" y="6" width="30" height="2" rx="2" />
                    <rect x="0" y="13" width="30" height="2" rx="2" />
                    <rect x="0" y="20" width="30" height="2" rx="2" />
                </AsideSVG>
            </button>
            <Logo>
                <span>LOGO</span>
                <ToggleButton
                    text={'test'}
                    options={['center', 'default', true, '중앙/기본']}
                >
                    <DimdLayerTestItem></DimdLayerTestItem>
                </ToggleButton>
            </Logo>
        </Content>
    );
}

export default LogoIcon;