import React, { useState, useEffect } from 'react';
import { Container, List as EventList, EventResume } from './styles/events';
import { Card as CommunityCard, Label, Content } from './styles/card';
import { Card as PeopleCard, PeopleButton } from './styles/people';
import { People as PeopleCollection } from '../collections/people';
import { Communities } from '../collections/communities';
import { Tracker } from 'meteor/tracker';
import { MdComputer, MdBusiness } from 'react-icons/md';
import { TiBusinessCard } from 'react-icons/ti';
import { Meteor } from 'meteor/meteor';

export default function Events() {
  // add all components states
  const [people, setPeople] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [communityClicked, setClickedCommunity] = useState('');
  const [checkedPeople, setcheckedPeople] = useState(0);
  const [checkoutLoading, setCheckoutLoading] = useState({});
  const [peoplebycompany, setPeopleByCompany] = useState([]);

  // set current clicked community as flag variable
  function SetActiveEvent(id) {
    setClickedCommunity(id);
  }

  //   add timeOut of 5 seconds for checked person
  // created state 'setCheckoutLoading' for to control the people button
  function CheckinPeople(id) {
    setCheckoutLoading({ id, active: true });
    setTimeout(() => {
      setCheckoutLoading(
        PeopleCollection.update(id, {
          $set: { checked: true, checkinDate: Date.now() },
        })
      );
      setCheckoutLoading({ id, active: false });
    }, 5000);
  }

  function CheckoutPeople(id) {
    // checkout people only whene the current people exists as checked
    const isCheckin = PeopleCollection.findOne({ _id: id, checked: true });
    if (isCheckin)
      PeopleCollection.update(id, {
        $set: { checked: false, checkoutDate: Date.now() },
      });
  }

  useEffect(() => {
    // call my method in server for set my group people by company
    Tracker.autorun(() => {
      Meteor.call('PeopleAggregation', communityClicked, (err, success) => {
        setPeopleByCompany(success);
      });
    });
  }, [communityClicked, checkoutLoading]);
  // get count of people by communityId and checked is true
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

  // get all people by community Id when 'communityClicked' is changed
  useEffect(() => {
    Tracker.autorun(() => {
      setPeople(
        PeopleCollection.find({ communityId: communityClicked }).fetch()
      );
    });
  }, [communityClicked]);
  // get all communities
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
            <p>
              People by company in the event right now:{' '}
              {peoplebycompany.map(e => `${e._id || 'N/A'} (${e.count || 0})`)}
            </p>
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
                // if current id match with id of my state checkoutLoading and loading is true then disabled my button
                disabled={
                  checkoutLoading.id == item._id && checkoutLoading.active
                }
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
