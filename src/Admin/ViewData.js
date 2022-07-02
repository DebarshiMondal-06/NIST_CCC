/* eslint-disable react-hooks/exhaustive-deps  */
import moment from 'moment';
import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { GlobalContext } from '../Context';

const ViewData = () => {
  const { viewModal, setViewModal, viewData, setViewData } = useContext(GlobalContext);
  const { ticketId, emailId, contact, name, residence, rollno, address,
    parent_contact, section, branch, batch, createdOn } = viewData;

  let handleClose = () => {
    setViewModal(false);
    setViewData({});
  };



  return <Modal show={viewModal} size="lg" className='view--modal' onHide={handleClose} backdrop="static"
    keyboard={false} centered>
    <Modal.Header>
      <Modal.Title className='modal--title'>
        {name}
        <br />
        <p>Ticket ID: <span className='badge bg-info'>{ticketId}</span></p>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <article>
        <p>Email: <span className='emailid'> {emailId}</span></p>
        <p>Phone: <span> {contact}</span></p>
        <p>Batch: <span> {batch}</span></p>
        <p>Branch: <span> {branch}</span></p>
        <p>Section: <span> {section}</span></p>
        <p>Rollno: <span> {rollno}</span></p>
        <p>Residence: <span> {residence}</span></p>
        <p>Parent Contact: <span> {parent_contact}</span></p>
        <p>Registered On: <span> {moment(createdOn).format('LLL')}</span></p>
      </article>
      {(address && address !== null) ? <p><b>Address: </b><span> {address}</span></p> : null}
      < br />
    </Modal.Body>
    <Modal.Footer>
      <Button className='close--btn' variant="dark" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
}

export default ViewData