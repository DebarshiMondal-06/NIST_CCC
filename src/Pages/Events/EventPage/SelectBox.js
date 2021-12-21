import React from 'react'

const SelectBox = ({ errors, register }) => {


  var branch_wise = [
    { name: 'B.Tech - CSE', value: 'b.tech cse' },
    { name: 'B.Tech - I.T.', value: 'b.tech i.t.' },
    { name: 'B.Tech - ECE', value: 'b.tech ece' },
    { name: 'B.Tech - EE', value: 'b.tech ee' },
    { name: 'B.Tech - ME', value: 'b.tech me' },
    { name: 'B.Tech - CE', value: 'b.tech ce' },
  ];
  var year_wise = [
    { name: '2018', value: '2018' },
    { name: '2019', value: '2019' },
    { name: '2020', value: '2020' },
  ];


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
  </section>
}

export default SelectBox
