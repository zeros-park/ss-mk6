import { IReactFC } from "@/types/global";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "@/store";
import { setAsideFlod, toggleAsideCustomize } from "@/store/slice/frameSlice";
import FloatingLayer from "@/frame/appArchitecture/floatingLayer/floatingLayer";
import LogoIcon from "@/content/logoIcon";
import styled from "styled-components";
import { dcwStyled } from "@/frame/designComponentWrapper";
import AsideContent from "@/content/frameRoot/asideContent";

const LayerWrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        width: `${layout.asideLeftSizeOptions.default}px;`,
        height: '100%',
    },
}))}`

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
                <FloatingLayer
                    closeFlag={floatingLayerCloseFlag}
                    afterClosed={() => setIsShowAsideLayer(false)}
                    options={['left', 'height', true, null]}
                >
                    <LayerWrapper>
                        <AsideContent isFlexed={false}>
                            <LogoIcon onClick={requestClose}></LogoIcon>
                        </AsideContent>
                    </LayerWrapper>
                </FloatingLayer>
            }
        </>
    )
}

export default LogoContent;