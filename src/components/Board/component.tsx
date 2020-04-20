import React, { useState, useEffect } from 'react';
import CellRow from '../CellRow/component';
import './style.scss';
import update from 'react-addons-update';
import { fourConnected, getEmptyCell, getInitCellState } from './logic';
import makeAIMove from './ai';

interface Props {
    width: number;
    height: number;
    players: number;
}

export default function Board(props: Props): JSX.Element {
    const [ loading, setLoading ] = useState(true);
    const [ player, setPlayer ] = useState(0);
    const [ message, setMessage ] = useState('');
    const [ cells, setCells ] = useState<number[][]>(getInitCellState(props.width, props.height));

    function doMove(column: number): void {
        if (!loading) {
            const cell = getEmptyCell(cells, column);
            if (cell === -1) alert('can\'t do move');
            else setCells(update(cells, {[column]: {[cell]: {$set: player}}}));
        }
    }

    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            if (fourConnected(cells, props.height, props.width, player)) {
                alert(`Player ${player + 1} has won!`);
                setLoading(true);
            }
            else setPlayer((player + 1) % props.players);
        }
    }, [cells]);

    useEffect(() => {
        setMessage(`It's Player ${player + 1}'s turn!`);
        if (player === 1) {
            setLoading(true);
            setMessage('The AI is thinking real hard about its next move!');
            makeAIMove(cells, props.width, props.height, player).then((column) => {
                setLoading(false);
                doMove(column);
            });
        }
    }, [player]);

    const rows: JSX.Element[] = [];
    for (let i = 0; i < props.width; i++) {
        rows.push(<CellRow cellStates={cells[i]} height={props.height} key={i} onClick={() => doMove(i)}/>);
    }

    return (
        <div className="board">
            <div className="cells">
                {rows}
            </div>
            <div className="message">
                <span>{message}</span>
            </div>
        </div>
    )
}
