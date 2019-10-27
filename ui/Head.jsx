import { MdEvent } from 'react-icons/md';
import { TEXTS } from '../shared/constants';
import React from 'react';
import { Header } from './styles/head';

export default function Head() {
  return (
    <Header>
      <h1>
        <MdEvent />
        {TEXTS.HOME_TITLE}
      </h1>
    </Header>
  );
}
