import React, { useState, useEffect } from 'react';
import { List } from './styles/people';
import { People as PeopleCollection } from '../collections/people';
import { Tracker } from 'meteor/tracker';

export default function People() {
  const [people, setPeoples] = useState([]);

  // useEffect(() => {
  //   Tracker.autorun(() => {
  //     setPeoples(people.find({ this.props.state.communityId }).fetch());
  //   });
  // }, []);

  return (
    <>
      <li>teste1</li>
      <li>teste2</li>
      <li>teste3</li>
    </>
  );
  // return people.map(item => (
  //   <List>
  //     <li key={item.firstName}>{item.firstName}</li>
  //   </List>
  // ));
}
