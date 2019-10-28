import React, { useState, useEffect } from 'react';
import { Container, List as EventList, EventResume } from './styles/events';
import { Card as CommunityCard, Label, Content } from './styles/card';
import { Card as PeopleCard, PeopleButton } from './styles/people';
import { People as PeopleCollection } from '../collections/people';
import { Communities } from '../collections/communities';
import { Tracker } from 'meteor/tracker';
import { MdComputer, MdBusiness } from 'react-icons/md';
import { TiBusinessCard } from 'react-icons/ti';

export default function Events() {
  const [people, setPeople] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [communityClicked, setClickedCommunity] = useState('');
  const [checkedPeople, setcheckedPeople] = useState(0);

  function SetActiveEvent(id) {
    setClickedCommunity(id);
  }

  function CheckinPeople(id) {
    PeopleCollection.update(id, { $set: { checked: true } });
  }

  function CheckoutPeople(id) {
    const isCheckin = PeopleCollection.findOne({ _id: id, checked: true });
    if (isCheckin) PeopleCollection.update(id, { $set: { checked: false } });
  }

  useEffect(() => {
    Tracker.autorun(() => {
      setcheckedPeople(
        PeopleCollection.find({
          checked: true,
          communityId: communityClicked,
        }).fetch().length
      );
    });
  }, [communityClicked]);

  useEffect(() => {
    Tracker.autorun(() => {
      setPeople(
        PeopleCollection.find({ communityId: communityClicked }).fetch()
      );
    });
  }, [communityClicked]);

  useEffect(() => {
    Tracker.autorun(() => {
      setCommunities(Communities.find().fetch());
    });
  }, []);

  return (
    <>
      <Container>
        <EventList id="communityList">
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
        <EventResume>
          <h1>Event Resume</h1>
          <div>
            <p>People in the event right now: {checkedPeople}</p>
            <p>People not checked-in: {people.length - checkedPeople} </p>
          </div>
        </EventResume>
        <EventList id="peopleList">
          {people.map(item => (
            <PeopleCard key={item.firstName + item.lastName}>
              <Content>
                {' '}
                <h4>{`${item.lastName}, ${item.firstName}`}</h4>
                <p>
                  <TiBusinessCard />
                  {item.title || 'N/A'}
                </p>
                <p>
                  <MdBusiness />
                  {item.companyName || 'N/A'}
                </p>
              </Content>
              <PeopleButton
                type="button"
                checked={item.checked}
                onClick={() =>
                  !item.checked
                    ? CheckinPeople(item._id)
                    : CheckoutPeople(item._id)
                }
              >
                {!item.checked ? 'Check-in' : 'Check-out'}
              </PeopleButton>
            </PeopleCard>
          ))}
        </EventList>
      </Container>
    </>
  );
}
