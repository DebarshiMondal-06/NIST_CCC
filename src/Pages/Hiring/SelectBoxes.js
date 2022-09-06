import React from 'react'

const SelectBox = ({ errors, register }) => {

  var gender= [
    {name:'Male', value:'Male'},
    {name:'Female', value:'Female'}
  ]
  var branch_wise = [
    { name: 'B.Tech - CSE', value: 'b.tech - CSE' },
    { name: 'B.Tech - I.T.', value: 'b.tech - I.T.' },
    { name: 'B.Tech - ECE', value: 'b.tech - ECE' },
    { name: 'B.Tech - EE', value: 'b.tech - EE' },
    { name: 'B.Tech - ME', value: 'b.tech - ME' },
    { name: 'B.Tech - CE', value: 'b.tech - CE' },
  ];
  var year_wise = [
    { name: '2021', value: '2021' },
  ];
  var residence = [
    { name: 'Hostelite', value: 'hostelite' },
    { name: 'Locality', value: 'Locality' },
  ]


  return <section className="row" style={{ marginTop: -10 }}>
    <div className={`select--box-1 col-md-6 mb-4 ${(errors.batch || errors.branch) ? 'select--box-1--modify' : 'select--box-1'}`}>
      <label className="form-label">Choose Batch</label>
      <i className="fas fa-sort-down"></i>
      <select className="form-control" name="" id="" {...register("batch", { required: true })} >
        <option value="">Select</option>
        {
          year_wise.map((item, i) => {
            const { name, value } = item;
            return <option key={i} value={value}>{name}</option>
          })
        }
      </select>
      {errors.batch && <span className="text-danger">This field is required</span>}
    </div>
    <div className={`select--box-2 col-md-6 mb-4 ${(errors.batch || errors.branch) ? 'select--box-2--modify' : 'select--box-2'}`}>
      <label className="form-label">Choose Branch</label>
      <i className="fas fa-sort-down"></i>
      <select className="form-control" {...register("branch", { required: true })} >
        <option value="">Select</option>
        {
          branch_wise.map((item, i) => {
            const { name, value } = item;
            return <option key={i} value={value}>{name}</option>
          })
        }
      </select>
      {errors.branch && <span className="text-danger">This field is required</span>}
    </div>
    <div className={`select--box-2 col-md-6 mb-4 ${(errors.gender || errors.branch || errors.batch) ? 'select--box-2--modify' : 'select--box-2'}`}>
      <label className="form-label">Gender</label>
      <i className="fas fa-sort-down"></i>
      <select className="form-control" {...register("branch", { required: true })} >
        <option value="">Select</option>
        {
          gender.map((item, i) => {
            const { name, value } = item;
            return <option key={i} value={value}>{name}</option>
          })
        }
      </select>
      {errors.gender && <span className="text-danger">This field is required</span>}
    </div>
    <div className="col-md-6 mb-4">
      <label className="form-label">Section (ex: A,B,C...)</label>
      <input type="text" className="form-control" {...register("section", { required: true, pattern: /^[A-Z]$/ })} />
      <p>{errors.section ? errors.section?.type === 'pattern' ? <span className="text-danger">Invaild section typed</span>
        : <span className="text-danger">This field is required</span>
        : null
      }</p>
    </div>
   
    <div className={`select--box-3 col-md-6 mb-4 ${(errors.section) ? 'select--box-3--modify' : 'select--box-3'}`}>
      <label className="form-label">Choose Residence</label>
      <i className="fas fa-sort-down"></i>
      <select className="form-control" {...register("residence", { required: true })} >
        <option value="">Select</option>
        {
          residence.map((item, i) => {
            const { name, value } = item;
            return <option key={i} value={value}>{name}</option>
          })
        }
      </select>
      {errors.residence && <span className="text-danger">This field is required</span>}
    </div>
  
    <div className="col-md-6 mb-4">
      <label className="form-label">Parent's Contact</label>
      <input type="text" className="form-control" {...register("parent_contact", { required: true, pattern: /^[0-9]{10}$/ })} />
      <p>{errors.parent_contact ? errors.parent_contact?.type === 'pattern' ? <span className="text-danger">must be of 10 digits</span>
        : <span className="text-danger">This field is required</span>
        : null
      }</p>
    </div>
  </section>
}

export default SelectBox
