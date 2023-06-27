import React from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { open } from "../store/slice/dimdLayerLegacySlice"; 

const Layout = styled.div`
    padding: 10px 10px 10px 10px;
`

const DimdLayerLegacyTestItem = () => {
    const dispacth = useDispatch();

    return (
        <>
            <Layout>
                <span>레이어 테스트 기능 모음(using legacy)</span>
                <hr/>
                <div>
                    <div>해더를 고정으로 둔 플로팅 레이어를 만든다. 백그라운드 딤드를 기본으로 하고, 클릭 시 닫힌다.</div>
                    <div>초기에 layer를 App.js 의 최상단에 위치하고 redux 를 사용해서 설계함.</div>
                    <div>1차 프로토는 되었으나 다중레이어 처리에 이슈가 있는 구조라고 판단하고 작업을 중단함</div>
                    <div>나중에 한번 더 보고싶을 듯 하여 로직을 남겨둠</div>
                </div>
            </Layout>
            <Layout>
                <div>
                    <button onClick={() => dispacth(open(['top', 'width']))}>상단-가로확장 레이어 오픈</button>
                    <button onClick={() => dispacth(open(['top', 'default']))}>상단-기본 레이어 오픈</button>
                </div>
            </Layout>
            <Layout>
                <div>       
                    <button onClick={() => dispacth(open(['center', 'default']))}>중앙-기본 레이어 오픈</button>
                    <button onClick={() => dispacth(open(['center', 'full']))}>중앙-풀 레이어 오픈</button>
                </div>
            </Layout>
            <Layout>
                <div>
                    <button onClick={() => dispacth(open(['bottom', 'width']))}>하단-가로확장 레이어 오픈</button>
                </div>
            </Layout>
            <Layout>
                <div>
                    <button onClick={() => dispacth(open(['left', 'height']))}>좌측-세로확장 레이어 오픈</button>
                    <button onClick={() => dispacth(open(['left', 'default']))}>좌측-기본 레이어 오픈</button>
                </div>
            </Layout>
            <Layout>
                <div>
                    <button onClick={() => dispacth(open(['right', 'default']))}>우측-기본 레이어 오픈</button>
                </div>
            </Layout>
        </>
        
    );
}

export default DimdLayerLegacyTestItem;