import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PeriodicTable = () => {
    let a = null;
    return (
        <svg viewBox="0 0 2250 1504">
            <Element group={1} period={1} name="Hydrogen" number={1} symbol="H" mass={1.008} state={2} type={5} />
            <Element group={1} period={2} name="Lithium" number={3} symbol="Li" mass={6.941} state={2} type={0} />
        </svg>
    );
};
type ElementProps = {
    group: number;
    period: number;
    name: string;
    number: number; // atomic number
    symbol: string; // element symbol
    mass: number; // atomic mass
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

    const x = () => {
        if (group === 1) return startX;
        return (group - 1) * 125 + 6 + startX;
    };
    const y = () => {
        if (period === 1) return startY;
        return (period - 1) * 125 + 6 + startY;
    };

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
            <rect x={x()} y={y()} width={125} height={125} fill={fill()} stroke={stroke()} strokeWidth={6} />
        </g>
    );
};

ReactDOM.render(<PeriodicTable />, document.getElementById('root'));
