import { Mongo } from 'meteor/mongo';

export const People = new Mongo.Collection('people');
// People.allow({ update: () => true });
