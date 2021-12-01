import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { eventDetails } from '../../../Component/Data/eventDetails';
import { GlobalContext } from '../../../Context';
import ModalRegister from './ModalRegister';
import ViewTicket from './ViewTicket';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactConfetti from 'react-confetti/dist/react-confetti';
import FeedBack from './FeedBack';
import Winners from './AfterEvent/Winners';



const OneEvent = () => {
  const [value] = useState(eventDetails[0]);
  const { setDis, dis } = useContext(GlobalContext);
  const [register, setRegister] = useState(false);


  var getUserItem = localStorage.getItem('user_data');
  const someFun1 = () => {
    document.getElementById('view-ticket').scrollIntoView({ behavior: "smooth" });
  };


  const check_data = (val) => {
    var configure = {
      inputs: {
        check: "register", email: `${val.toLowerCase().trim()}`, verify: true
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
      if (el.data && el.data.status === 'SUCCEEDED') {
        var parseData = JSON.parse(el.data.output)
        if (parseData.Item) {
          localStorage.setItem('user_data', JSON.stringify(parseData.Item));
          toast.success('Successfully Verified!');
          setDis(true);
          setTimeout(() => {
            setDis(false);
          }, 3000);
        } else {
          toast.info('Register Now!, No user found');
          setRegister(true);
        }
      } else {
        toast.error('Something Went Wrong!');
      }
    })
  };

  useEffect(() => {
    if (register) {
      setTimeout(() => {
        window.scrollTo(0, 700);
      }, 500);
    }
  }, [register]);


  const open_choose = () => {
    setRegister(false);
    return Swal.fire({
      icon: 'info',
      title: 'What to do? 🤔',
      text: 'Choose one of below option in order to process!',
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'View Ticket',
      confirmButtonColor: '#170A59',
      cancelButtonColor: '#7474BF',
      confirmButtonText: 'Register',
      showDenyButton: true,
      denyButtonText: `Close`,
    }).then((result) => {
      Swal.close();
      if (result.isConfirmed) {
        setRegister(true);
      } else if (result.isDenied) {
        Swal.close();
      }
      else {
        Swal.fire({
          title: 'Registered Email',
          input: 'email',
          inputLabel: 'Provide your email to verify!',
          inputPlaceholder: 'Enter email address here',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Verify',
          allowOutsideClick: false,
          showLoaderOnConfirm: true,
          cancelButtonText: 'Cancel',
          showCancelButton: true,
          preConfirm: (login) => {
            return check_data(login)
          }
        }).then((val) => {
          console.log(val);
        });
      }
    });
  };


  return <section className="container event--brief--section">
    <ReactConfetti numberOfPieces={dis ? 250 : 0} run={true} />
    <div style={{ margin: '10% 0px' }}>
      <Link to="/events-all" className="link_to_member">
        <article className="event--back_btn">
          <i className="fas fa-long-arrow-alt-left fa-2x"></i>
        </article>
      </Link>
      <main>
        <h1 className='text-left'>{value.name} <i className="fas fa-calendar-check"></i> </h1>
        {
          getUserItem === null ? <article className="register--btn" onClick={() => open_choose()}>
            <button className="btn btn-primary shadow-lg">
              Register Here &nbsp; <i className={`fas ${!register ? 'fa-plus' : 'fa-caret-down'}`}></i>
            </button>
          </article> : <article className="register--btn" onClick={() => someFun1()}>
            <button className="btn btn-primary shadow-lg" style={{ letterSpacing: 2 }}>
              View Ticket &nbsp; <i className="fas fa-ribbon"></i>
            </button>
          </article>
        }
      </main>
      <div className="card shadow  text-center p-0 animate__animated animate__zoomIn">
        <p className={`event-describe p-4 ${getUserItem ? 'event-describe--registred' : 'event-describe'}`}>{value.describe}</p>
        <div className="event-extra">
          <p className='badge bg-info'>2 Days Workshops</p>
        </div>
        <article className="event--info">
          <h6><i className="fas fa-hourglass-start"></i> Timings 👇 </h6>
          {
            (getUserItem) ? <article className="badge--register">
              <span className="registered--badge badge shadow-lg"> Registered 🎉🥳</span>
            </article> : null
          }
          <div className="timings" id="view-ticket">
            <br />
            <p className="date"><b>Date:</b> 10<sup>th</sup> - 11<sup>th</sup> of November</p>
            <p><b>Time:</b> 5pm onwards</p>
          </div>
        </article>
        <article className="place">
          <p className="badge bg-warning" id="view-register">Venue: <i className="fas fa-map-marker-alt"></i> <b>Gal - 301</b></p>
        </article>
      </div>
    </div>
    {
      register ? <ModalRegister setRegister={setRegister} /> : null
    }
    <div>
      {/* <Winners /> */}
    </div>
    <br />
  </section>
}

export default OneEvent;
