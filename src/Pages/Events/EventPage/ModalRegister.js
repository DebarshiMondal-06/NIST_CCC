import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../Context';
import randomstring from "randomstring";
import './register.css';
import { useForm } from "react-hook-form";
import SelectBox from './SelectBox';
import axios from 'axios';
import { toast } from 'react-toastify';
import ProcessSpinner from '../../../Component/Spinners/ProcessSpinner';



const ModalRegister = ({ setRegister }) => {
  const { setDis } = useContext(GlobalContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [load, setLoad] = useState(false);


  const sumbit_data = (data) => {
    setLoad(true);
    const { fullname, email, rollno, contact, branch, batch } = data;
    var ticket = `CCC_${randomstring.generate({
      length: 6,
      capitalization: 'uppercase'
    })}`;
    var configure = {
      inputs: {
        check: "register", email: `${email.toLowerCase().trim()}`, name: `${fullname}`, branch: `${branch}`, batch: `${batch}`,
        rollno: `${rollno}`, ticket: `${ticket}`, contact: `${contact}`,
      }
    };
    var configure_inputs = {
      stateMachineArn: 'arn:aws:states:ap-south-1:143151111018:stateMachine:NIST_CCC_MACHINE',
      input: JSON.stringify(configure)
    };
    axios({
      method: 'POST',
      url: 'https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev',
      data: JSON.stringify(configure_inputs, null, 2)
    }).then((el) => {
      setLoad(false);
      if (el.data && el.data.status === 'SUCCEEDED') {
        var parseData = JSON.parse(el.data.output);
        if (parseData.SdkResponseMetadata) {
          window.scrollTo(0, 0);
          localStorage.setItem('user_data', JSON.stringify({ ticket, ...data }));
          toast.success('Thanks for Registering');
          setDis(true);
          setRegister(false);
          setTimeout(() => {
            setDis(false);
          }, 2000);
        } else {
          window.scrollTo(0, 0);
          localStorage.setItem('user_data', JSON.stringify(parseData));
          toast.info('Already Registered!');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } else {
        toast.error('Something Went Wrong!')
      }
    })
  };




  return <article style={{ display: 'flex', justifyContent: 'center' }}>
    <main className="card shadow-lg modal--card">
      <h1>Register Here</h1>
      <b style={{ marginTop: -50 }} className="p-1 lead"><center>Please provide all details in order to process!</center></b>
      <article className="modal-body mt-2">
        <form className={`contact_card`} onSubmit={handleSubmit(sumbit_data)}>
          <section className="row">
            <div className="col-md-6 mb-4">
              <label className="form-label" id="view-ticket">Full Name</label>
              <input type="text" className="form-control" {...register("fullname", { required: true })} />
              <p>{errors.fullname && <span className="text-danger">This field is required</span>}</p>
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label">Roll No</label>
              <input type="text" className="form-control" {...register("rollno", { required: true, pattern: /^\d{9}$/ })} />
              <p>{errors.rollno ? errors.rollno?.type === 'pattern' ? <span className="text-danger">must be of 9 digits</span>
                : <span className="text-danger">This field is required</span>
                : null
              }</p>
            </div>
          </section>
          <SelectBox register={register} errors={errors} />
          <section className="row">
            <div className="col-md-6 mb-4">
              <label className="form-label">Email Address (nist.edu)</label>
              <input type="text" className="form-control" {...register("email", { required: true, pattern: /\S+@nist.edu$/ })} />
              <p>{errors.email ? errors.email?.type === 'pattern' ? <span className="text-danger">must a valid nist.edu mail ID</span>
                : <span className="text-danger">This field is required</span>
                : null
              }</p>
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label">Contact</label>
              <input type="text" className="form-control" {...register("contact", { required: true, pattern: /^[0-9]{10}$/ })} />
              <p>{errors.contact ? errors.contact?.type === 'pattern' ? <span className="text-danger">must be of 10 digits</span>
                : <span className="text-danger">This field is required</span>
                : null
              }</p>
            </div>
          </section>
          <section className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Other (optional)</label>
              <input type="text" className="form-control" />
            </div>
          </section>
          <article style={{ float: 'right', display: 'flex', gap: "1em" }}>
            <button className="btn btn-success" style={{ width: '150px' }}>
              {
                load ? <ProcessSpinner /> : 'Submit'
              }
            </button>
            <button type="button" onClick={() => window.location.reload()} className="btn btn-danger">Close</button>
          </article>
        </form>
      </article>
      <br />
    </main>
  </article>
}

export default ModalRegister;
