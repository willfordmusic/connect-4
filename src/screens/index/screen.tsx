import React from 'react';
import './style.scss';
import Board from '../../components/Board/component';

export default function Index() {
    return (
        <Board width={5} height={5} players={2} />
        //<Board width={7} height={6} players={2} />
    );
}
