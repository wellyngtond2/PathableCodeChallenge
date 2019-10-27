import React, { useState, useEffect } from 'react';
import { Container, List as EventList } from './styles/events';
import { Card as CommunityCard, Label, Content } from './styles/card';
import { Card as PeopleCard } from './styles/people';
import { People as PeopleCollection } from '../collections/people';
import { Communities } from '../collections/communities';
import { Tracker } from 'meteor/tracker';
import { MdComputer } from 'react-icons/md';

export default function Events() {
  const [peoples, setPeoples] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [communityCliked, setClikedCommunity] = useState('');

  function SetActiveEvent(id) {
    console.log('gg', id);
    setClikedCommunity(id);
  }

  useEffect(() => {
    Tracker.autorun(() => {
      setPeoples(
        PeopleCollection.find({ communityId: communityCliked }).fetch()
      );
    });
  }, [communityCliked]);

  useEffect(() => {
    Tracker.autorun(() => {
      setCommunities(Communities.find().fetch());
    });
  }, []);

  return (
    <>
      <Container>
        <EventList>
          {communities.map(item => (
            <CommunityCard
              key={item.name}
              onClick={() => SetActiveEvent(item._id)}
            >
              <header>
                <Label>
                  <MdComputer />
                  Technology
                </Label>
              </header>
              <Content> {item.name}</Content>
            </CommunityCard>
          ))}
        </EventList>
        <EventList>
          {peoples.map(item => (
            <PeopleCard key={item.firstName + item.lastName}>
              <Content> {item.firstName}</Content>
            </PeopleCard>
          ))}
        </EventList>
      </Container>
    </>
  );
}
