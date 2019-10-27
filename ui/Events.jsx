import React, { useState, useEffect } from 'react';
import { Container, List as EventList } from './styles/events';
import Card from './Cards';
import People from './People';
import { List as PeopleList } from './styles/people';

export default function Events() {
  const [id_communitie, setIdCommunitie] = useState('');

  function SetActiveEvent(id) {
    console.log('gg', id);
    setIdCommunitie({ id_communitie: id });
  }

  return (
    <>
      <Container>
        <EventList>
          <Card />
        </EventList>
        <PeopleList>
          <People />
        </PeopleList>
      </Container>
    </>
  );
}
