import React, { useState } from 'react';
import './style.scss';

interface Props {
    height: number;
    cellStates: number[];
    onClick: (cellIndex: number) => void;
}

function Cell(props: {player: number}): JSX.Element {
    return (
        <div className={
            'cell ' + (props.player === -1 ? 'empty' : 'p' + props.player?.toString())
        }></div>
    )
}

export default function CellRow(props: Props): JSX.Element {
    const [cell, setCell] = useState(0);

    function clickHandler() {
        props.onClick(cell);
        setCell(cell + 1);
    }

    const cells: JSX.Element[] = [];
    for (let i = 0; i < props.height; i++) 
        cells.push(<Cell key={i} player={props.cellStates[i]} />);

    return (
        <div className="cell-row" onClick={clickHandler}>
            {cells}
        </div>
    );
}