import React, { useEffect } from "react";
import { IReactFC } from '@/types/global';
import { useDispatch } from "react-redux";
import { isCompleteFirstRender } from "@/store/slice/configSlice";

const Config: IReactFC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isCompleteFirstRender(true));
    }, [])

    return (<></>);
}

export default Config;