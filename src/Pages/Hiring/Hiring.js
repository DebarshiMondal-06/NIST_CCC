import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SelectBoxes from './SelectBoxes';
import './hiring.css';
import axios from 'axios';
import ProcessSpinner from '../../Component/Spinners/ProcessSpinner';
import { toast } from 'react-toastify';



const Hiring = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [load, setLoad] = useState(false);

const residence = watch('residence');
  const sumbit_data = (data) => {
    setLoad(true);
    axios({
      method: 'POST',
      url: 'https://pghzmva884.execute-api.ap-south-1.amazonaws.com/dev/selection',
      data
    }).then(() => {
      setLoad(false);
      toast.success('Successfully Updated!');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }).catch(() => {
      toast.error('Something Went Wrong, Try Again!');
    });
  };



  return <section className="container hiring--process">
    <h1 className="text-center">Selection Process</h1>
    <article style={{ display: 'flex', justifyContent: 'center' }}>
      <main className="card shadow-lg modal--card" style={{ borderRadius: 20 }}>
        <article className="modal-body mt-2">
          <p style={{ fontSize: 18, marginBottom: 40 }}>Please fillup all the details in order to process...</p>
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
            <section className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label">Email Address (nist.edu)</label>
                <input type="text" className="form-control" {...register("emailId", { required: true, pattern: /\S+@nist.edu$/ })} />
                <p>{errors.emailId ? errors.emailId?.type === 'pattern' ? <span className="text-danger">must a valid nist.edu mail ID</span>
                  : <span className="text-danger">This field is required</span>
                  : null
                }</p>
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">BPUT Regd No</label>
                <input type="text" className="form-control" {...register("regno", { required: true, pattern: /^[0-9]{10}$/ })} />
                <p>{errors.regno ? errors.regno?.type === 'pattern' ? <span className="text-danger">must be of 10 digits</span>
                  : <span className="text-danger">This field is required</span>
                  : null
                }</p>
              </div>
            </section>
            <section className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label">1st Sem SGPA</label>
                <input type="text" className="form-control" {...register("sgpa", { required: true, pattern:/^[0-9]\.\d{2}$/})} />
                <p>{errors.sgpa ? errors.sgpa?.type === 'pattern' ? <span className="text-danger">Invalid value</span>
                  : <span className="text-danger">This field is required</span>
                  : null
                }</p>
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">No of Backlogs</label>
                <input type="text" className="form-control" {...register("backlog", { required: true, pattern: /^[0-9]{1}$/ })} />
                <p>{errors.backlog ? errors.backlog?.type === 'pattern' ? <span className="text-danger">must be of 1 digits</span>
                  : <span className="text-danger">This field is required</span>
                  : null
                }</p>
              </div>
            </section>
            <section className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label">Contact</label>
                <input type="text" className="form-control" {...register("contact", { required: true, pattern: /^[0-9]{10}$/ })} />
                <p>{errors.contact ? errors.contact?.type === 'pattern' ? <span className="text-danger">must be of 10 digits</span>
                  : <span className="text-danger">This field is required</span>
                  : null
                }</p>
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">Whatsapp No</label>
                <input type="text" className="form-control" {...register("whatsapp", { required: true, pattern: /^[0-9]{10}$/ })} />
                <p>{errors.whatsapp ? errors.whatsapp?.type === 'pattern' ? <span className="text-danger">must be of 10 digits</span>
                  : <span className="text-danger">This field is required</span>
                  : null
                }</p>
              </div>
            </section>
            <SelectBoxes register={register} errors={errors} />
            {
              residence === 'Locality' ? <div className="col-md-12 mb-4">
                <label className="form-label">Your's Full Address</label>
                <textarea type="text" className="form-control" {...register("address", { required: true })} />
                <p>{errors.address && <span className="text-danger">This field is required</span>}</p>
              </div> : null
            }
            <article style={{ float: 'right', display: 'flex', gap: "1em" , marginTop:"2%"}}>
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
  </section>
}

export default Hiring;