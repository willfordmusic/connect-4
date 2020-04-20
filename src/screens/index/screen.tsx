import React from 'react';
import './style.scss';
import Board from '../../components/Board/component';

export default function Index() {
    return (
        <Board width={7} height={6} />
    );
}
