import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Communities from '../ui/Communities';

// 'load' my collections after publish in server
Meteor.subscribe('AllCommunities');
Meteor.subscribe('AllPeoples');

Meteor.startup(() => {
  render(<Communities />, document.getElementById('app'));
});
