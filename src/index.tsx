import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PeriodicTable = () => {
    let a = null;
    return (
        <svg viewBox="0 0 2358 1504">
            <Element name="Hydrogen" symbol="H" number={1} mass={1.008} group={1} period={1} state={0} type={5} />
            <Element name="Helium" symbol="He" number={2} mass={4.003} group={18} period={1} state={0} type={7} />
            <Element name="Lithium" symbol="Li" number={3} mass={6.941} group={1} period={2} state={0} type={0} />
            <Element name="Beryllium" symbol="Be" number={4} mass={9.012} group={2} period={2} state={0} type={1} />
            <Element name="Boron" symbol="B" number={5} mass={10.811} group={13} period={2} state={0} type={4} />
            <Element name="Carbon" symbol="C" number={6} mass={12.011} group={14} period={2} state={0} type={5} />
            <Element name="Nitrogen" symbol="N" number={7} mass={14.007} group={15} period={2} state={0} type={5} />
            <Element name="Oxygen" symbol="O" number={8} mass={15.999} group={16} period={2} state={0} type={5} />
            <Element name="Fluorine" symbol="F" number={9} mass={18.998} group={17} period={2} state={0} type={6} />
            <Element name="Neon" symbol="Ne" number={10} mass={20.18} group={18} period={2} state={0} type={7} />
        </svg>
    );
};
type ElementProps = {
    name: string;
    symbol: string; // element symbol
    number: number; // atomic number
    mass: number; // atomic mass
    group: number;
    period: number;
    state: number; // 0 = solid, 1 = liquid, 2 = gas
    type: number;
    /* 0 = alkali metal
     * 1 = alkaline earth metal
     * 2 = transition metal
     * 3 = basic metal
     * 4 = metalloid
     * 5 = nonmetal
     * 6 = halogen
     * 7 = noble gas
     * 8 = lanthanide
     * 9 = actinide
     */
};
const Element = ({ group, period, name, number, symbol, mass, state, type }: ElementProps) => {
    const startX = 3;
    const startY = 3;

    const xPos = () => {
        if (group === 1) return startX;
        return (group - 1) * 131 + startX;
    };
    const yPos = () => {
        if (period === 1) return startY;
        return (period - 1) * 131 + startY;
    };

    const [x] = useState(xPos());
    const [y] = useState(yPos());

    const fill = () => {
        switch (type) {
            case 0:
                return '#F48584';
            case 1:
                return '#F7B476';
            case 2:
                return '#FAF59C';
            case 3:
                return '#CEE07B';
            case 4:
                return '#A0D6BE';
            case 5:
                return '#96D9EB';
            case 6:
                return '#7EC2EC';
            case 7:
                return '#CCBFDE';
            case 8:
                return '#F9C7DD';
            case 9:
                return '#DB80B5';
            default:
                return 'none';
        }
    };
    const stroke = () => {
        switch (type) {
            case 0:
                return '#ED1C24';
            case 1:
                return '#F58020';
            case 2:
                return '#FEE001';
            case 3:
                return '#8CC63F';
            case 4:
                return '#26B576';
            case 5:
                return '#49C4D4';
            case 6:
                return '#406AB3';
            case 7:
                return '#762B90';
            case 8:
                return '#F494BE';
            case 9:
                return '#EF59A1';
            default:
                return 'black';
        }
    };
    return (
        <g>
            <rect x={x} y={y} width={125} height={125} fill={fill()} stroke={stroke()} strokeWidth={6} />

            <g textAnchor="middle">
                <text x={x + 62} y={y + 25} fontSize={20}>
                    {number}
                </text>
                <text x={x + 62} y={y + 60} fontSize={30}>
                    {symbol}
                </text>
                <text x={x + 62} y={y + 88} fontSize={25}>
                    {name}
                </text>
                <text x={x + 62} y={y + 115} fontSize={22}>
                    {mass}
                </text>
            </g>
        </g>
    );
};

ReactDOM.render(<PeriodicTable />, document.getElementById('root'));
