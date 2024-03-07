import React from 'react';

const ProfileDetail = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Profile Details</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <strong>Name:</strong>
          </div>
          <div className="col-md-8">
            {props.userDetails.name}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Email:</strong>
          </div>
          <div className="col-md-8">
            {props.userDetails.email}
          </div>
        </div>
        
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default ProfileDetail;
