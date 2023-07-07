import React, { useRef } from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { validTypes, hide } from "@/store/slice/dimdLayerLegacySlice";
import ContentWrapper from "@/frame/floatingLayerLegacy/contentWrapper";
import { IReactFC } from "@/types/global";
import { IRootStore } from "@/store";
import { IDimdLayerStateLegacy } from "@/store/slice/dimdLayerLegacySlice";

const Dimd = styled.div<IDimdLayerStateLegacy>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 400;

    &:after {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: ${props => (props.type.isShowDimd ? '""' : 'none')};
        background: rgba(0, 0, 0, .5);
        backdrop-filter: blur(2px);
        height: ${props => (props.type.isShowContent ? '100%' : '0')};
        transition-property: opacity;
        transition-duration: 300ms;
    }
    &.off:after {
        opacity: 0;
    }
    &.on:after {
        opacity: 1;
    }
`

const FloatingLayerLegacy: IReactFC = ({ children }) => {
    const dimd = useRef<HTMLDivElement>(null);
    const type = useSelector((state: IRootStore) => state.dimdLayer.type);
    const dispatch = useDispatch();
    const isValidOptions = () => validTypes(type.positionType, type.extendType)

    const hideDimd: React.TransitionEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();

        if (dimd.current === event.target && isValidOptions() === false) {
            console.log('whow', dimd)
            dispatch(hide());
        }
    }

    /**
     * 플로팅 레이어에 대한 트렌지션 완료.
     * 이제 복수 레이어 처리와
     * 딤드 설정 on/off 처리를 해보자.
     * 
     * 23.6.15
     * 이미 위치를 고정한 dimd가 아니고
     * 원할때마다 해당 마크업 기준에서 생성해서 쓸 수 있도록 하면, 마크업 배치 기준으로도 합리적일듯 하다
     * 다중 영역도 구조상 가능하고, 이 아이디어로 재구성해보자.
     * 
     */
    return (
        <Dimd
            className={isValidOptions() ? 'on' : 'off'}
            ref={dimd}
            type={type}
            onTransitionEnd={hideDimd}
        >
            {isValidOptions() &&
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            }
        </Dimd>
    );
}

export default FloatingLayerLegacy;