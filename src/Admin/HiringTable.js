/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import './admin.css';
import axios from 'axios';
import ProcessSpinner from '../Component/Spinners/ProcessSpinner';
import MainSpinner from '../Component/Spinners/MainLoader';
import { adminAuthContext } from './AdminContext';
import { useLocation } from 'react-use';
import Swal from 'sweetalert2';



const HiringTable = () => {
  const { pathname } = useLocation();
  const { get_all_hiring_users, hireUser, user_loader } = useContext(adminAuthContext);
  const [loading, setLoading] = useState({
    delete_loader: false,
    index: null
  });
  const [input, setInput] = useState('');
  useEffect(() => {
    get_all_hiring_users();
  }, [pathname]);


  const delete_user = (email, i) => {
    setLoading({ delete_loader: true, index: i });
    axios({
      method: 'get',
      url: `https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev/delete_hiring?emailId=${email}`,
    }).then(() => {
      setLoading({ delete_loader: false, index: null });
      get_all_hiring_users();
    }).catch((err) => {
      console.log(err);
    })
  };


  const open_choose = (email, i) => {
    return Swal.fire({
      icon: 'warning',
      title: 'Want to Delete? Sure!',
      text: `User:: ${email}`,
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#170A59',
      confirmButtonText: 'Delete',
    }).then((result) => {
      Swal.close();
      if (result.isConfirmed) {
        delete_user(email, i);
      }
    })
  }



  var filterData = [];
  filterData = hireUser && hireUser.filter((items) => {
    return items.fullname.toLowerCase().includes(input.toLowerCase());
  });




  return <section className="view--request table-responsive ">
    <article className="operation">
      <h3>Hiring Details</h3>
      <input type="text" className="form-control" placeholder="Search by name"
        onChange={(e) => setInput(e.target.value)} />
    </article>
    {
      user_loader
        ? <MainSpinner />
        : <table className="table text-center table-borderless  table-hover">
          <thead className="table--head">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th>Residence</th>
              <th>Rollno</th>
              <th scope="col">Email</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table--body text-capitalize">
            {
              filterData && filterData.map((items, i) => {
                const { emailId, contact, fullname, residence, rollno } = items;
                return <tr key={i} style={{
                  cursor: 'pointer',
                  backgroundColor: (i % 2) === 0 ? 'white' : 'aliceblue'
                }}>
                  <td>{i + 1}</td>
                  <td className="text-capitalize">{fullname}</td>
                  <td>{contact}</td>
                  <td className="text-capitalize">{residence}</td>
                  <td><b>{rollno}</b></td>
                  <td>{emailId}</td>
                  <td>
                    <button onClick={() => open_choose(emailId, i)}
                      className="btn btn-danger">
                      {
                        (loading.delete_loader && i === loading.index) ? <ProcessSpinner /> : <i className="fas fa-trash"></i>
                      }
                    </button>
                  </td>
                </tr>
              })
            }
            {
              !filterData.length > 0 ? <tr style={{ fontSize: 20 }} className="p-1"><td>No User Found</td></tr> : null
            }
          </tbody>
        </table>
    }
  </section >
};

export default HiringTable;
