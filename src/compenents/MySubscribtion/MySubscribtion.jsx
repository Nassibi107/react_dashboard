import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import ModalConfirmationUnSubscribe from './ModaConfirmationUnSubscribe/ModalConfirmationUnSubscripe'
import ModalDetailsSubscribtion from './ModalDetailsSubscribtion/ModalDetailsSubscribtion'
import { useNavigate, useParams } from 'react-router';

const MySubscribtion = () => {
    const PackagesMega = [
    { id : 1 , name : 'Trial' , price : 'Free' , duration : '1 day' , etat : 'Available' },
    { id : 2 , name : 'Monthly' , price : '$12' , duration : 'month' , etat : 'Available' },
    { id : 3 , name : 'Quarterly' , price : '$18' , duration : '3 months' , etat : 'Available' },
    { id : 4 , name : 'Half Yearly' , price : '$28' , duration : '6 months' , etat : 'Available' },
    { id : 5 , name : 'Yearly' , price : '$40' , duration : '12 months' , etat : 'Only 1 spot left!' },
  ]

  const PackagesGolden = [
    { id : 1 , name : 'Trial' , price : 'Free' , duration : '1 day' , etat : 'Available' },
    { id : 2 , name : 'Monthly' , price : '$25' , duration : '3 months' , etat : 'Available' },
    { id : 3 , name : 'Quarterly' , price : '$35' , duration : '6 months' , etat : 'Available' },
    { id : 4 , name : 'Half Yearly' , price : '$45' , duration : '12 months' , etat : 'Only 1 spot left!' },
    { id : 5 , name : 'Yearly' , price : '$45' , duration : '12 months' , etat : 'Only 1 spot left!' },
  ]

  const scrollFromLeftVariants = {
    hidden: { x: -2000 },
    visible: { x: 10, transition: { type: 'tween', duration: 0.8 } },
  };

  const {id} = useParams()

  // Modal Confirmation to Unsubscribe
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [libelle, setLibelle] = useState('');

  const openConfirmation = (libelle) => {
    ToggleActionButton(null)
    setLibelle(libelle);
    setConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setConfirmationOpen(false);
  };

  const handleConfirm = () => {
    closeConfirmation();
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
  };
  //Modal Details
  const [detailsOpen , setDetailsOpen] = useState(false)
  const [idDetails , setIdDetails] = useState()
  const [subDateDetails , setSubDateDetails] = useState()
  const [subExpDate , setSubExpDate] = useState()
  const [activeCodeDetails , setActiveCodeDetails] = useState()
  const [priceDetails , setPriceDetails] = useState()

  const DetailsModal = (idDetails , libelle , subDateDetails , activeCodeDetails , priceDetails , subExpDate) =>{
    ToggleActionButton(null)
    setLibelle(libelle)
    setDetailsOpen(true)
    setIdDetails(idDetails)
    setSubExpDate(subExpDate)
    setSubDateDetails(subDateDetails)
    setActiveCodeDetails(activeCodeDetails)
    setPriceDetails(priceDetails)
  }

  const CloseDetails = () =>{
    setDetailsOpen(false)
  }


  const [openMenuId, setOpenMenuId] = useState(null);

  const ToggleActionButton = (id) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(id);
      // setSubscriptions((prevSubscriptions) =>
      //   prevSubscriptions.map((subscription) => {
      //     if (subscription.id === id) {
      //       return { ...subscription, open: true };
      //     } else {
      //       return { ...subscription, open: false };
      //     }
      //   })
      // );
    }
  };
  const navigate= useNavigate()

  return (
    <div className='container px-5 mx-auto md:px-20 my-20 md:my-[116px]'>
      <ModalDetailsSubscribtion isOpen={detailsOpen} onClose={CloseDetails} libelle={libelle} id={idDetails} ExpiryDate={subExpDate} SubDate={subDateDetails} ActiveCode={activeCodeDetails} price={priceDetails} />
      <ModalConfirmationUnSubscribe isOpen={isConfirmationOpen} onClose={closeConfirmation} onConfirm={handleConfirm} libelle={libelle} />
      <div className='mt-20'>
        <h1 className='md:text-start text-center text-2xl'>My Subscription {id}</h1>
        <p className='text-slate-500 text-center md:text-start text-md mt-2'>
          This is where you can explore and manage your subscriptions. You have the flexibility to both modify and delete your subscriptions, giving you full control over your subscription preferences.
        </p>
      </div>
      <div className='flex'>
        <div className='my-5 text-center md:text-start mx-auto md:mx-0'>
          <span className='font-md'>Sort By:</span>
          <button className='py-1 px-2 border-slate-100 border-2 rounded-md mx-1 transition-all duration-500 hover:scale-105'>Recent</button>
          <button className='py-1 px-2 border-slate-100 border-2 rounded-md mx-1 transition-all duration-500 hover:scale-105'>Ancient</button>
        </div>
      </div>
      <motion.div initial='hidden' animate='visible' variants={scrollFromLeftVariants}>
      <table className='w-max md:w-full table border-2 border-slate-200 py-5 shadow-lg rounded-md text-center overflow-x-auto md:overflow-x-hidden'>
          <thead>
            <tr className='bg-slate-100'>
              <th className='py-4 font-medium'>Id</th>
              <th className='py-4 font-medium'>name</th>
              <th className='py-4 font-medium'>price</th>
              <th className='py-4 font-medium'>duration</th>
              <th className='py-4 font-medium'>etat</th>
              <th className='py-4 font-medium' colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            { id === 'Golden' ? PackagesGolden.map((item) => (
              <tr key={item.id} className='border-slate-200 border-t-2 even:bg-slate-50'>
                <td className='py-4'>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.duration}</td>
                <td><span className='bg-Mybg rounded-md p-2 text-white'>{item.etat}</span></td>
                <td>
                  <button className='flex justify-start items-center w-full px-2 py-2 hover:bg-slate-100 rounded-md text-sm text-gray-700' onClick={() => openConfirmation(item.libelle)}>
                      <span className='mr-3 bg-red-500 hover:bg-red-400 rounded-md p-1 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </span>
                    </button>
                </td>
                <td>
                    <button className='flex justify-start items-center w-full px-2 py-2 hover:bg-slate-100 rounded-md text-sm text-gray-700' onClick={()=>{navigate(`/Services/package/Golden/update/${item.id}`)}}>
                      <span className='mr-3 bg-yellow-500 hover:bg-yellow-400 rounded-md p-1 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </span>
                    </button>
                </td>
              </tr>
            )) : PackagesMega.map((item) => (
              <tr key={item.id} className='border-slate-200 border-t-2 even:bg-slate-50'>
                <td className='py-4'>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.duration}</td>
                <td><span className='bg-Mybg rounded-md p-2 text-white'>{item.etat}</span></td>
                <td>
                  <button className='flex justify-start items-center w-full px-2 py-2 hover:bg-slate-100 rounded-md text-sm text-gray-700' onClick={() => openConfirmation(item.libelle)}>
                      <span className='mr-3 bg-red-500 hover:bg-red-400 rounded-md p-1 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </span>
                    </button>
                </td>
                <td>
                    <button className='flex justify-start items-center w-full px-2 py-2 hover:bg-slate-100 rounded-md text-sm text-gray-700' onClick={()=>{navigate(`/Services/package/Mega/update/${item.id}`)}}>
                      <span className='mr-3 bg-yellow-500 hover:bg-yellow-400 rounded-md p-1 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </span>
                    </button>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default MySubscribtion;