import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient('http://localhost:8080/v1/graphql', {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'vVNSW26buQSGXyMRSs2HcFdZpSDO127dnh8ByOjZB8pFpCri6xot1FC9eoXebmSx'
  }
});