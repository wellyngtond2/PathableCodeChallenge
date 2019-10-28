import { Meteor } from 'meteor/meteor';
import { loadInitialData } from './initial-data';
import { Communities } from '../collections/communities';
import { People } from '../collections/people';

Meteor.startup(() => {
  // DON'T CHANGE THE NEXT LINE
  loadInitialData();
  // publish my collections for read in client
  Meteor.publish('AllCommunities', () => Communities.find());
  Meteor.publish('AllPeoples', () => People.find());
  // group by companyName and count checked people by communityId
  Meteor.methods({
    async PeopleAggregation(communityId) {
      return People.rawCollection()
        .aggregate(
          {
            $match: { checked: true, communityId },
          },
          {
            $group: {
              _id: '$companyName',
              count: { $sum: 1 },
            },
          },
          {
            $field: ['companyName', 'count'],
          }
        )
        .toArray();
    },
  });
});
