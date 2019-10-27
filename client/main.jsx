import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Routes from '../ui/routes';

Meteor.subscribe('AllCommunities');
Meteor.subscribe('AllPeoples');

Meteor.startup(() => {
  render(<Routes />, document.getElementById('app'));
});
