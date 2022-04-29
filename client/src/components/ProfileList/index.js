import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Projects Yet...</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between">
        {profiles &&
          profiles.map((profile) => (

            <div key={profile._id} class="rounded overflow-hidden shadow-lg">
              <img class="w-full" src="https://picsum.photos/250/250" alt="randompic"></img>
      <div class="px-6 py-4">
                <div class="font-bold text-xl">{profile.projectname} by {profile.name} </div>

                <p class="text-gray-850">
                  {profile.skills ? profile.skills.length : 0}{' '}
                  people interested
                  {profile.skills && profile.skills.length === 1 ? '' : ''}
                </p>

        <p class="text-gray-700 text-base mt-5">
          {profile.projectdescription}
        </p>
        
      </div>
      <div class="px-6 pt-4 pb-2">
                <Link class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded" to={`/profiles/${profile._id}`}>
                  Join the Discussion
                </Link>
      </div>
      </div>
            
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
