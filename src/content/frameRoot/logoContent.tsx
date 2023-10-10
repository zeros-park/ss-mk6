import { IReactFC } from "@/types/global";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "@/store";
import { setAsideFlod, toggleAsideCustomize } from "@/store/slice/frameSlice";
// import FloatingLayer from "@/frame/appArchitecture/floatingLayer/floatingLayer";
import FloatingLayerV2 from "@/frame/appArchitecture/floatingLayer/floatingLayerV2";
import LogoIcon from "@/content/logoIcon";
import styled from "styled-components";
import { dcwStyled } from "@/frame/designComponentWrapper";
import Aside from "@/frame/appArchitecture/aside";

const LayerWrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        width: `${layout.asideLeftSizeOptions.default}px;`,
        height: '100%',
    },
}))}`

const Wrapper = styled.section`${() => dcwStyled(({ layout, colorSet }) => ({
    default: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        pointerEvents: 'none',
    },
}))}`
const VirtualArea = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        pointerEvents: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingBottom: layout.headerHeightSize
    },
}))}`
const ScrolledArea = styled.section<{ isShowScrollbar: boolean }>`${({ isShowScrollbar }) => ({
    // pointerEvents: 'none',
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '100%',
    ['&::-webkit-scrollbar']: {
        display: `${isShowScrollbar ? 'auto' : 'none'}`
    }
})}`

const LogoContent: IReactFC = () => {
    const dispatch = useDispatch();
    const currentLayout = useSelector((state: IRootStore) => state.frame.currentLayout);
    const asideFlod = useSelector((state: IRootStore) => state.frame.asideFlod);
    const [floatingLayerCloseFlag, setFloatingLayerCloseFlag] = useState(false);
    const [isShowAsideLayer, setIsShowAsideLayer] = useState(false);

    const requestClose: React.MouseEventHandler<HTMLButtonElement> = (el) => {
        setFloatingLayerCloseFlag(true)
    }
    const openLayer: React.MouseEventHandler<HTMLButtonElement> = (el) => {
        setFloatingLayerCloseFlag(false)

        if (currentLayout === 'minimal') {
            setIsShowAsideLayer(isShowAsideLayer === false)
            dispatch(setAsideFlod(false))
        } else if (currentLayout === 'simple') {
            setIsShowAsideLayer(isShowAsideLayer === false)
            dispatch(setAsideFlod(false))
        } else {
            dispatch(toggleAsideCustomize())
        }
    }

    useEffect(() => {
        if (asideFlod === true) {
            setFloatingLayerCloseFlag(true)
        }
    }, [asideFlod])

    return (
        <>
            <LogoIcon onClick={openLayer}></LogoIcon>
            {(isShowAsideLayer === true) &&
                <FloatingLayerV2
                    closeFlag={floatingLayerCloseFlag}
                    afterClosed={() => setIsShowAsideLayer(false)}
                    // options={['left', 'height', true, null]}
                    options={['left', 'full', true, null]}
                >
                    <LayerWrapper>
                        <Wrapper>
                            <section>
                                <LogoIcon onClick={requestClose}></LogoIcon>
                            </section>
                            <section>
                                <VirtualArea>
                                    <ScrolledArea isShowScrollbar={false}>
                                        <Aside isFlexed={false}></Aside>
                                    </ScrolledArea>
                                </VirtualArea>
                            </section>
                        </Wrapper>
                    </LayerWrapper>
                </FloatingLayerV2>
            }
        </>
    )
}

export default LogoContent;