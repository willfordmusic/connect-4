import React, { useState } from 'react';
import CellRow from '../CellRow/component';
import './style.scss';
import update from 'react-addons-update';

interface Props {
    width: number;
    height: number;
}

export enum Player {
    P0 = 'p0',
    P1 = 'p1',
}

export default function Board(props: Props): JSX.Element {
    const initCellState: (Player | null)[][] = [];
    for (let i = 0; i < props.width; i++) {
        initCellState.push([]);
        for (let j = 0; j < props.height; j++) initCellState[i].push(null);
    }

    const [ player, setPlayer ] = useState(Player.P1);
    const [ cellStates, setCellStates ] = useState<(Player | null)[][]>(initCellState);

    const rows: JSX.Element[] = [];
    for (let i = 0; i < props.width; i++) {
        rows.push(<CellRow cellStates={cellStates[i]} height={props.height} key={i} />);
    }

    return (
        <div className="board">
            {rows}
        </div>
    )
}
