import React, { useState } from 'react'
import Axios from 'axios';
import { toast } from 'react-toastify';
import ProcessSpinner from '../Spinners/ProcessSpinner';



const FooterContact = () => {
  const [value, setValue] = useState({
    firstname: '', lastname: '', email: '', message: ''
  });
  const { email, firstname, lastname, message } = value;
  const [load, setLoad] = useState(false);


  const submit_contact = (e) => {
    e.preventDefault();
    var check = Object.values(value).every((x) => x !== '');
    if (check) {
      setLoad(true);
      var configure = {
        inputs: {
          check: "contact",
          email: `${email}`,
          fullname: `${firstname + lastname}`,
          message: `${message}`
        }
      };
      var configure_inputs = {
        stateMachineArn: 'arn:aws:states:ap-south-1:143151111018:stateMachine:NIST_CCC_MACHINE',
        input: JSON.stringify(configure)
      };
      Axios({
        method: 'POST',
        url: 'https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev',
        data: JSON.stringify(configure_inputs, null, 2)
      }).then((el) => {
        setLoad(false);
        if (el.data && el.data.status === 'SUCCEEDED') {
          setValue({ message: '', firstname: '', lastname: '', email: '' });
          toast.success('Thanks for Contacting!');
        } else {
          toast.error('Something Went Wrong!')
        }
      })
    } else {
      toast.info('All fields are required!');
      toast.clearWaitingQueue();
    }
  }



  return <form className={`card shadow contact_card`} onSubmit={submit_contact}>
    <h2>Contact Here</h2>
    <section className="row mb-3">
      <div className="col-md-6">
        <label className="form-label">First</label>
        <input type="text" className="form-control" value={firstname}
          onChange={(e) => setValue({ ...value, firstname: e.target.value })} />
      </div>
      <div className="col-md-6">
        <label className="form-label">Last</label>
        <input type="text" className="form-control" value={lastname}
          onChange={(e) => setValue({ ...value, lastname: e.target.value })} />
      </div>
    </section>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" className="form-control" value={email}
        onChange={(e) => setValue({ ...value, email: e.target.value })} />
    </div>
    <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea type="text" className="form-control" value={message}
        onChange={(e) => setValue({ ...value, message: e.target.value })}></textarea>
    </div>
    <button type="submit" className={`btn contact_btn text-center`}>
      {
        load ? <ProcessSpinner /> : 'Submit'
      }
    </button>
  </form>
}

export default FooterContact
