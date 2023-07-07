import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { show, hide, close, validTypes, IDimdLayerStateLegacy, extendType } from '@/store/slice/dimdLayerLegacySlice'
import { IReactFC } from "@/types/global";
import { IRootStore } from "@/store";

const isExtendWidth = (extendType: extendType) => {
    if (extendType === undefined) {
        return false;
    } else {
        return ['width', 'full'].indexOf(extendType) !== -1;
    }
}
const isExtendHeight = (extendType: extendType) => {
    if (extendType === undefined) {
        return false;
    } else {
        return ['height', 'full'].indexOf(extendType) !== -1;
    }
}
const Background = styled.div<IDimdLayerStateLegacy>`
    position: fixed;
    z-index: 400;
    width: 100%;
    height: ${props => props.type.isShowContent ? '100%' : 'auto'};
`
const Wrapper = styled.div<IDimdLayerStateLegacy>`
    z-index: 450;
    position: fixed;
    top: 50%;
    left: 50%;
    width: ${props => isExtendWidth(props.type.extendType) ? '100%' : 'auto'};
    height: ${props => isExtendHeight(props.type.extendType) ? '100%' : 'auto'};
    background-color: white;
    transition-property: transform;
    transition-duration: 200ms;

    ${props => {
        switch (props.type.positionType) {
            case 'center': return (`
                    transform: translate(-50%,-50%);
                    transition-property: opacity;
                    opacity: 0;

                    &.on {
                        opacity: 1;
                    }
                `)
                break;
            case 'top': return (`
                    top: 0;
                    transform: translate(-50%, -100%);   
                    
                    &.on {
                        transform: translate(-50%, 0);   
                    }
                `)
                break;
            case 'bottom': return (`
                    top: 100%;
                    transform: translate(-50%, 100%);

                    &.on {
                        transform: translate(-50%, -100%);   
                    }
                `)
                break;
            case 'left': return (`
                    left: 0;
                    transform: translate(-100%, -50%);   

                    &.on {
                        transform: translate(0, -50%);   
                    }
                `)
                break;
            case 'right': return (`
                    left: 100%;
                    transform: translate(100%,-50%);
                    
                    &.on {
                        transform: translate(-100%, -50%);   
                    }
                `)
                break;
            default: return (`
                    display: none;
                `)
                break;
        }
    }}
`
const WrapperHeader = styled.div<IDimdLayerStateLegacy>`
    display: flex;
    align-items: center;
    min-width: 190px;
    ${props => {
        switch (props.type.positionType) {
            case 'left': return (`
                    justify-content: flex-end;
                    flex-direction: row-reverse;
                `)
                break;
            default: return (`
                    justify-content: space-between;
                    flex-direction: row;
                `)
                break;
        }
    }}
    
`

const ContentWrapper: IReactFC = ({ children }) => {
    const background = useRef<HTMLDivElement>(null);
    const type = useSelector((state: IRootStore) => state.dimdLayer.type);
    const dispacth = useDispatch();
    const isValidOptions = () => validTypes(type.positionType, type.extendType)

    const tryToHideContent: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if (background.current === event.target) {
            hideContent();
        }
    }
    const hideContent = () => {
        dispacth(hide());
    }
    const destroyWrapper: React.TransitionEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();

        if (type.isShowContent === false) {
            dispacth(close());
        }
    }

    useEffect(() => {
        if (isValidOptions() && (type.isShowContent === false)) {
            /**
             * dispatch를 통한 업데이트가 리엑트컴포넌트의 재렌더링을 유발하며 비동기적으로 진행이 시작됨
             * 컴포넌트의 재렌더링은 useEffect 훅이 완료되고 나서 진행됨
             * dispatch를 통한 데이터 패치가 컴포넌트의 재렌더링 완료시점보다 먼저 종료되는 경우엔
             * 트렌지션지연시간을 표현하지 못하는 경우가 발생하는 것으로 예측됨
             * 하여, 렌더링을 확실하게 두가지로 나누기 위해서, setTimeout을 통해 데이터 패치를
             * 브라우저 엔진의 영역으로 이동함
             */
            setTimeout(() => { dispacth(show()) });
        }
    }, [isValidOptions()]);

    return (
        <Background
            className='_bg'
            type={type}
            ref={background}
            onClick={tryToHideContent}
        >
            <Wrapper
                type={type}
                className={type.isShowContent ? 'on' : 'off'}
                onTransitionEnd={destroyWrapper}
            >
                <div>
                    <WrapperHeader type={type}>
                        <span>layer header</span>
                        <span>
                            <button onClick={hideContent}>close</button>
                        </span>
                    </WrapperHeader>
                    <hr />
                    <div>
                        {children}
                    </div>
                </div>
            </Wrapper>
        </Background>
    );
}

export default ContentWrapper;