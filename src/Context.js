import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const GlobalContext = createContext();


const Context = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [memberDetails, setMemberDetails] = useState({});
  const [registerModal, setRegisterModal] = useState(false);
  const { pathname } = useLocation();
  const [dis, setDis] = useState(false);


  
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modalOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return <GlobalContext.Provider value={{
    dis,
    setDis,
    modalOpen,
    setModalOpen,
    closeModal,
    setCloseModal,
    memberDetails,
    setMemberDetails,
    setRegisterModal,
    registerModal
  }}>
    {children}
  </GlobalContext.Provider>
}


export { Context, GlobalContext };
