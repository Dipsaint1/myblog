import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '7fxi5gqe',
  dataset: 'production',
  apiVersion: '2022-10-19',
  useCdn: true,
});

export default client;