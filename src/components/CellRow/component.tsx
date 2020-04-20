import React from 'react';
import Cell from '../Cell/component';
import './style.scss';
import { Player } from '../Board/component';

interface Props {
    height: number;
    cellStates: (Player | null)[];
}

export default function CellRow(props: Props): JSX.Element {
    function clickHandler() {

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