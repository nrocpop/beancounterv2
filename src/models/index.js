// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ex1 } = initSchema(schema);

export {
  Ex1
};