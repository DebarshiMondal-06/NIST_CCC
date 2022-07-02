/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-use';
import { club_member_details } from '../Component/Data/memberDetails';
import { adminAuthContext } from './AdminContext';


const AdminCard = () => {
  const { data, get_all_register_users, hireUser } = useContext(adminAuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    get_all_register_users();
    // get_all_hiring_users();
  }, [pathname]);




  return <div className="row">
    <Link to="/admin/register" className="links--admin col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-large font-weight-bold text-primary mb-1">
                Registration (Total)
              </div>
              <div className="h1 mb-3 font-weight-bold text-gray-800 count">{data.length}</div>
              <p>Event - Serverless in Action</p>
            </div>
            <div className="col-auto">
              <i className="fas fa-plus fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
    <div className="links--admin col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-large font-weight-bold text-success mb-1">
                Members (Total)
              </div>
              <div className="h1 mb-3 font-weight-bold text-gray-800 count">{club_member_details.length}</div>
              <p>Club Members</p>
            </div>
            <div className="col-auto">
              <i className="fas fa-users fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Link to="/admin/iam--details" className="links--admin col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-large font-weight-bold text-warning mb-1">
                IAM User (Total)
              </div>
              <div className="h1 mb-3 font-weight-bold text-gray-800 count">01</div>
              <p>AWS IAM User</p>
            </div>
            <div className="col-auto text-dark">
              <i className="fas fa-calendar-week fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link to="/admin/hiring--details" className="links--admin col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-large font-weight-bold text-danger mb-1">
                Hiring (Total)
              </div>
              <div className="h1 mb-3 font-weight-bold text-gray-800 count">{hireUser.length}</div>
              <p>Selection Process</p>
            </div>
            <div className="col-auto text-dark">
              <i className="fas fa-calendar-week fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
}

export default AdminCard;
