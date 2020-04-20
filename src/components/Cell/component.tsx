import React from 'react';
import './style.scss';
import { Player } from '../Board/component';

interface Props {
    player: Player | null;
}

export default function Board(props: Props): JSX.Element {
    return (
        <div className={
            'cell ' + (props.player === null ? 'empty' : props.player?.toString())
        }></div>
    )
}
