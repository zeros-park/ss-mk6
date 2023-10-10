import React, { useEffect } from "react";
import { IReactFC } from '@/types/global';
import { useDispatch, useSelector } from "react-redux";
import { isCompleteFirstRender, setRouterPathname } from "@/store/slice/documentSlice";
import { useRouter } from "next/router";
import { debounce } from "@/utils/debounce";
import { IRootStore } from "@/store";
import { setCurrentLayout } from "@/store/slice/frameSlice";

const Config: IReactFC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const layout = useSelector((state: IRootStore) => state.frame.layout);



    useEffect(() => {
        dispatch(isCompleteFirstRender(true));

        const updateLayout = () => {
            if (window.innerWidth <= layout.mediaWidthOptions.minimal) {
                dispatch(setCurrentLayout('minimal'))
            } else if (window.innerWidth <= layout.mediaWidthOptions.simple) {
                dispatch(setCurrentLayout('simple'))
            } else {
                dispatch(setCurrentLayout('default'))
            }
        }
        const handleResize = () => {
            debounce(updateLayout, 300)
        };

        const scrolled = () => {
            console.log('zeros, scroll!!')
        }

        updateLayout();
        // resize 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    useEffect(() => {
        dispatch(setRouterPathname(router.pathname));
    }, [router.pathname])

    return (<></>);
}

export default Config;