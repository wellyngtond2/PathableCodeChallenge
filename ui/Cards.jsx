import React, { useState, useEffect } from 'react';
import { Card, Label, Content } from './styles/card';
import { Communities } from '../collections/communities';
import { Tracker } from 'meteor/tracker';
import { MdComputer } from 'react-icons/md';
import { List } from './styles/people';

export default function Head() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    Tracker.autorun(() => {
      setCommunities(Communities.find().fetch());
    });
  }, []);

  return communities.map(item => (
    <>
      <Card key={item.name} onClick={() => SetActiveEvent(item._id)}>
        <header>
          <Label>
            <MdComputer />
            Technology
          </Label>
        </header>
        <Content> {item.name}</Content>
      </Card>
    </>
  ));
}
