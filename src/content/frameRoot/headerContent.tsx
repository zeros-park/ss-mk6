import { IReactFC } from "@/types/global";
import React from "react";
import styled, { CSSObject } from 'styled-components';
import CounterTestItem from "@/content/test-counter";
import ToggleButton from "@/frame/appArchitecture/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "@/store";
import { setColorMode, colorMode } from "@/store/slice/documentSlice";


const FlexArea = styled.div`
`
const Item = styled.span`
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;
    background: #ffffff;
`
const focused: CSSObject = {
    backgroundColor: 'gray',
    color: 'white'
}

const HeaderContent: IReactFC = () => {
    const colorMode = useSelector((state: IRootStore) => state.document.colorMode)
    const dispacth = useDispatch();
    const updateColorMode = (mode: colorMode) => {
        dispacth(setColorMode(mode))
    }
    const isCheck = (mode: colorMode) => (colorMode === mode)

    return (
        <>
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
                        options="center"
                        text={colorMode + '모드'}
                        // text='모드'
                        styledFocus={focused}
                    >
                        <div>
                            <div>
                                <span>current mode: {colorMode} !!</span>
                            </div>
                            <div>
                                <input id="white" name="mode" type="radio"
                                    onChange={() => updateColorMode("white")}
                                    checked={isCheck("white")}
                                />
                                <label htmlFor="white">화이트 모드</label>
                            </div>
                            <div>
                                <input id="dark" name="mode" type="radio"
                                    onChange={() => updateColorMode("dark")}
                                    checked={isCheck("dark")}
                                />
                                <label htmlFor="dark">다크 모드</label>
                            </div>
                            <div>
                                <input id="system" name="mode" type="radio"
                                    onChange={() => updateColorMode("system")}
                                    checked={isCheck("system")}
                                />
                                <label htmlFor="system">시스템 모드</label>
                            </div>
                        </div>
                    </ToggleButton>
                </Item>
                <Item>
                    <span>Auth</span>
                </Item>
            </FlexArea>
        </>
    )
}

export default HeaderContent;