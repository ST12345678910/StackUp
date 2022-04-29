import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { REMOVE_PROFILE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const DeleteProfile = ({profileId}) => {
  const [removeProfile, { error, data }] = useMutation(REMOVE_PROFILE);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(profileId);

    try {
      const { data } = await removeProfile({
        variables: { profileId },
      });

      Auth.logout(data.removeProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button className="btn btn-block btn-info" onClick={handleFormSubmit} >
      Delete Profile
    </button>
  );
};

export default DeleteProfile;
