import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../../Context';



const MemberBrief = () => {
  const history = useHistory();
  const { memberDetails } = useContext(GlobalContext);
  var images = memberDetails.profile_img && memberDetails.profile_img.length > 50
    ? memberDetails.profile_img
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'



  if (!memberDetails.member_type) {
    history.push('/members');
  }
  return <main className="member_brief container" style={{ marginTop: '8%', marginBottom: '10%' }}>
    <section className="row" style={{ marginTop: 50 }}>
      <div className="col-md-1">
        <Link to="/members" className="link_to_member">
          <article className="back_btn">
            <i className="fas fa-long-arrow-alt-left fa-2x"></i>
          </article>
        </Link>
      </div>
      <div className="col-md-5 mt-5">
        <div className="watch_img_card shadow mb-5">
          <img src={images}
            className="card-img-top" alt="..." />
        </div>
      </div >
      <div className="col-md-5 watch_desc_section" style={{ marginTop: '10rem' }}>
        <p style={{ fontSize: 20 }}>
          <span className="badge bg-info"> {memberDetails.member_type} </span>
        </p>
        <h2 className='name'>{memberDetails.fullname} </h2>
        <p>{memberDetails.desgination}</p>
        <article className="desc">
          {memberDetails.description && memberDetails.description.substring(0, 200)}
        </article>
        <article className="socail--ids">
          <p><a rel="noreferrer" href={
            (memberDetails.linkedln_link && memberDetails.linkedln_link.includes('https'))
              ? memberDetails.linkedln_link
              : ''
          } target="_blank"><i className="fab fa-linkedin text-primary"></i></a>
          </p>
          <p><a rel="noreferrer" href={
            (memberDetails.github_link && memberDetails.github_link.includes('https'))
              ? memberDetails.github_link
              : ''
          } target="_blank">
            <i className="fab fa-github-square text-dark"></i>
          </a></p>
        </article>
      </div>
      <div className="col-md-1"></div>
    </section >
  </main>
}

export default MemberBrief;
