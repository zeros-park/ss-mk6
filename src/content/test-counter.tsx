import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch, } from "react-redux";
import { increment, decrement } from "@/store/slice/counterSlice";
import { IRootStore } from "@/store";


const Item = styled.span`
    padding: 5px 5px 5px 5px;
`
const CounterTestItem: React.FC = () => {
    const count = useSelector((state: IRootStore) => state.counter.count);
    const dispacth = useDispatch();

    return (
        <span>
            <Item>count: {count}</Item>
            <div>
                <button onClick={() => dispacth(increment())}>[+]</button>
                <button onClick={() => dispacth(decrement())}>[-]</button>
            </div>
        </span>

    );
}

export default CounterTestItem;