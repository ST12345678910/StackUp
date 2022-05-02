import { useMutation } from '@apollo/client';
import { REMOVE_PROFILE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const DeleteProfile = ({profileId}) => {
  const [removeProfile] = useMutation(REMOVE_PROFILE);
  
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
    <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded" onClick={handleFormSubmit} >
      Delete Profile
    </button>
  );
};

export default DeleteProfile;
