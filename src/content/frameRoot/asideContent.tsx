import { IReactFC } from "@/types/global";
import React from "react";
import BlockItem from "@/content/blockItem";
import ToggleButton from "@/frame/appArchitecture/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";
import AsideLink from "@/content/asideLink";
import FullYScrollWrapper from "@/frame/appArchitecture/FullYScrollWrapper";

const AsideContent: IReactFC<{ isFlexed?: boolean }> = ({ isFlexed = true, children }) => {
    return (
        <>
            {children}
            <FullYScrollWrapper>
                <AsideLink iconText="icon1" href="/" text="홈으로 가요!" isFlexed={isFlexed}></AsideLink>
                <AsideLink iconText="icon2" href="/about" text="about으로 가요!" isFlexed={isFlexed}></AsideLink>
                <AsideLink iconText="icon3" href="/test" text="test으로 가요!" isFlexed={isFlexed}></AsideLink>
                <BlockItem text={'ai 4'}>
                    <ToggleButton
                        text={'test'}
                        options={['center', 'default', true, '중앙/기본']}
                    >
                        <DimdLayerTestItem></DimdLayerTestItem>
                    </ToggleButton>
                </BlockItem>
                <BlockItem text={'ai 5'}></BlockItem>
                <BlockItem text={'ai 6'} />
                <BlockItem text={'ai 7'} />
                <BlockItem text={'ai 8'} />
                <BlockItem text={'ai 9'} />
                <BlockItem text={'ai 10'} />
                <BlockItem text={'ai 11'} />
                <BlockItem text={'ai 12'} />
                <BlockItem text={'ai 13'} />
                <div>end</div>
            </FullYScrollWrapper>
        </>
    )
}

export default AsideContent;