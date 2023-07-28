import { IReactFC } from "@/types/global";
import React from "react";
import styled from 'styled-components';
import ToggleButton from "@/frame/appArchitecture/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";

const AsideSVG = styled.svg`
    width: 30px;
    height: 30px;
    vertical-align: middle;
`

const LogoContent: IReactFC = () => {
    const clickLogo: React.MouseEventHandler<HTMLButtonElement> = (el) => {
        alert('oops aside!!')
    }

    return (
        <>
            <button onClick={clickLogo}>
                <AsideSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <rect x="0" y="6" width="30" height="2" rx="2" />
                    <rect x="0" y="13" width="30" height="2" rx="2" />
                    <rect x="0" y="20" width="30" height="2" rx="2" />
                </AsideSVG>
            </button>
            <span>LOGO</span>
            <ToggleButton
                text={'test'}
                options={['center', 'default', true, '중앙/기본']}
            >
                <DimdLayerTestItem></DimdLayerTestItem>
            </ToggleButton>
        </>
    )
}

export default LogoContent;