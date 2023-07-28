import { wrapper } from "@/store";
import { colorMode, setColorMode } from "@/store/slice/layoutSlice";
import { GetServerSideProps } from "next";

type onceInitStoreOnGSSP = (getServerSideProps?: GetServerSideProps) => GetServerSideProps;
/**
 * 외부에서 최초로 해당 SPA에 접속한 경우, 쿠키의 정보를 바탕으로 서버렌더링 시점에 store를 조기 설정합니다.
 * 
 * (이후 router의 이동시에는 해당 로직을 우회합니다.)
 * @param getServerSideProps 
 * @returns 
 */
const getOnceServerSideProps: onceInitStoreOnGSSP = (getServerSideProps?) => {
    return wrapper.getServerSideProps(({ dispatch }) => async (context) => {
        console.log('zeros server !!')
        /**
         * sec-fetch-dest: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
         */
        if (context.req.headers['sec-fetch-dest'] === 'document') {
            const mode: colorMode = (context.req.cookies['colorMode'] || 'system') as colorMode;
            dispatch(setColorMode(mode))
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
