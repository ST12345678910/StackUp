import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../../utils/mutations';
import { QUERY_PROJECTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ProjectForm = () => {
  const [thoughtText, setProjectText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_PROJECTS });

        cache.writeQuery({
          query: QUERY_PROJECTS,
          data: { thoughts: [addProject, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, 
          addProject] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setProjectText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setProjectText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's your latest project/idea?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="What the next big thing..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit" to="/">
                Add Project/Idea
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup</Link> to make a post.
        </p>
      )}
    </div>
  );
};

export default ProjectForm;
