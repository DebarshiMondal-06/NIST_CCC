import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { club_member_details } from '../../Component/Data/memberDetails';
import MainLoader from '../../Component/Spinners/MainLoader';
import { GlobalContext } from '../../Context';
import './member.css';


const Members = () => {
  document.body.style.backgroundColor = 'whitesmoke';
  const { setMemberDetails } = useContext(GlobalContext);
  const [details] = useState(club_member_details);
  const [operate, setOperate] = useState(false);
  const [loader, setLoader] = useState(true);
  document.title = 'NIST CCC | Members';




  details.sort((a, b) => a.year.localeCompare(b.year))
  details.sort((a, b) => b.member_type.localeCompare(a.member_type))
  var dataCoreMembers = details.filter((item) => !item.member_type.includes('Representative'));
  var dataRepresentative = details.filter((item) => item.member_type.includes('Representative'));



  const display_member_card = (filterData) => {
    return filterData && filterData.map((item, i) => {
      const { firstname, profile_img, member_type } = item;
      var images = profile_img && profile_img.includes('https')
        ? profile_img
        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'

      return <Link key={i} to="/members/brief" onClick={() => setMemberDetails(item)} className="link_to_brief">
        <div className="card member--div" data-aos="zoom-in-up" data-aos-easing="ease-in-sine"
          data-aos-duration="600">
          <div className="member--img">
            <img className="card-img-top" src={images} alt="Card cap" />
            <p>{firstname}</p>
          </div>
          <div className="card-body mt-2">
            <h5 className="card-title">{member_type}</h5>
          </div>
        </div>
      </Link>
    })
  };

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 800);
    }
  }, [loader]);


  return <section className="container member--section">
    <h1 className="mb-3">Club Members</h1>
    <article className="operation--members">
      <div className="text-center">
        <p className={!operate ? 'text-info' : ''} onClick={() => {
          setOperate(false);
          setLoader(true);
        }}>Members</p>
      </div>
      <div>
        <p className={operate ? 'text-info' : ''} onClick={() => {
          setLoader(true)
          setOperate(true);
        }}>Advisor</p>
      </div>
    </article>
    {loader
      ? <MainLoader />
      : <article className="">
        {
          !operate ? <>
            <section className="member--lists president--section">
              {display_member_card(dataRepresentative)}
            </section>
            <section className="member--lists">
              {display_member_card(dataCoreMembers)}
            </section>
          </>
            : <section className="text-center mt-5" style={{ fontSize: 30 }}>
              Club Advisor Section
            </section>
        }
      </article>
    }
  </section>
}

export default Members
