import { Meteor } from 'meteor/meteor';
import { loadInitialData } from './initial-data';
import { Communities } from '../collections/communities';
import { People } from '../collections/people';

Meteor.startup(() => {
  // DON'T CHANGE THE NEXT LINE
  loadInitialData();

  Meteor.publish('AllCommunities', () => Communities.find());
  Meteor.publish('AllPeoples', () => People.find());
});
