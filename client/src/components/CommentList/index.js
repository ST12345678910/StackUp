import React from 'react';
const CommentList = ({ skills }) => {
  if (!skills.length) {
    return <h3>No one is here...</h3>;
  }

  return (
    <div className="mt-32 bg-gray-100 rounded-xl"> Anonymous users left the following feedback...
      
      <div className="flex-col justify-space-between my-4">
        {skills &&
          skills.map((skill) => (
            <div key={skill}>
                
              <div className="align-center">

                <h4 className="card rounded-md">
                 {skill} <br />
                </h4>
                
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
