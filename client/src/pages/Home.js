import React from 'react';
import { useQuery } from '@apollo/client';

import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

import { QUERY_PROJECTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center text-center">
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div> */}
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProjectList
              thoughts={thoughts}
              title="Popular Projects"
            />
          )}
        </div>
        <div
          className="col-12 col-md-10 mb-3 p-3 text-center"
        >
          <ProjectForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
