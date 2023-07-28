import { IReactFC } from "@/types/global";
import React, { useState } from "react";
import styled, { CSSObject } from 'styled-components';
import CounterTestItem from "@/content/test-counter";
import ToggleButton from "@/frame/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "@/store";
import { colorMode, setColorMode } from "@/store/slice/layoutSlice";


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
// type designMode = 'white' | 'dark' | 'system'

const HeaderContent: IReactFC = () => {
    /**
     * 이걸 redux 로 설정을 변경하고, 실제 디자인을 설정하고, ssr 에도 동작하도록 해보자.
     */
    // const [mode, setMode] = useState<designMode>("system");
    const colorMode = useSelector((state: IRootStore) => state.layout.colorMode)
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
                        // text={colorMode + '모드'}
                        text='모드'
                        styledFocus={focused}
                    >
                        <div>
                            <div>
                                {/* <span>current mode: {mode} !!</span> */}
                                <span>current mode: {colorMode} !!</span>
                            </div>
                            <div>
                                <input id="white" name="mode" type="radio"
                                    // onChange={() => setMode("white")}
                                    onChange={() => updateColorMode("white")}
                                    // checked={mode === "white"}
                                    checked={isCheck("white")}
                                />
                                <label htmlFor="white">화이트 모드</label>
                            </div>
                            <div>
                                <input id="dark" name="mode" type="radio"
                                    // onChange={() => setMode("dark")}
                                    onChange={() => updateColorMode("dark")}
                                    // checked={mode === "dark"}
                                    checked={isCheck("dark")}
                                />
                                <label htmlFor="dark">다크 모드</label>
                            </div>
                            <div>
                                <input id="system" name="mode" type="radio"
                                    // onChange={() => setMode("system")}
                                    onChange={() => updateColorMode("system")}
                                    // checked={mode === "system"}
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