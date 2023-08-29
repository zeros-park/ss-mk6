import { wrapper } from "@/store";
import { getColorModeOnServerSide, setColorMode, setRouterPathname } from "@/store/slice/documentSlice";
import { GetServerSideProps } from "next";

type onceInitStoreOnGSSP = (getServerSideProps?: GetServerSideProps) => GetServerSideProps;
/**
 * 외부에서 최초로 해당 SPA에 접속한 경우, 쿠키의 정보를 바탕으로 서버렌더링 시점에 store를 조기 설정합니다.
 * store에서도 첫 서버 진입시에 설정된 정보만을 흡수하고, 이후 동작시에는 서버렌더링 시에 생성되는 store를 참고하지 않는 점을
 * 반드시 인지할 것
 * (이후 router의 이동시에는 해당 로직을 우회합니다.)
 * @param getServerSideProps 
 * @returns 
 */
const getOnceServerSideProps: onceInitStoreOnGSSP = (getServerSideProps?) => {
    return wrapper.getServerSideProps(({ dispatch }) => async (context) => {
        /**
         * sec-fetch-dest: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
         */
        if (context.req.headers['sec-fetch-dest'] === 'document') {
            const mode = getColorModeOnServerSide(context.req.cookies);
            dispatch(setColorMode(mode))
            dispatch(setRouterPathname(context.resolvedUrl))
        }

        if (getServerSideProps === undefined) {
            return { props: {} }
        } else {
            return getServerSideProps(context);
        }
    });
}

export {
    getOnceServerSideProps,
}
