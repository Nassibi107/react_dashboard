import React from 'react'
import { useNavigate } from 'react-router-dom';
const ModalConfirmationUnSubscripe = ({isOpen, onClose, onConfirm , libelle}) => {
  const handleCancel = () => {
    onClose();
  };

  const navigate = useNavigate();

  const handleDelete = () => {
    onConfirm();
  };
  return (
    <div className={`fixed  top-0 left-0 w-full h-full z-50 backdrop-sm bg-backgroundConfirmationModel flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-white p-5 md:mx-0 mx-2 rounded-md shadow-md md:w-[600px]">
            <p className='text-center my-5'>Are you sure you want to unsubscribe from <span className='text-Mybg'>{libelle}</span>&nbsp;?</p>
            <div className="flex justify-end mt-10">
              <button className="bg-slate-100 hover:bg-slate-200 px-4 py-2 mr-2 rounded" onClick={handleCancel}>
                Cancel
              </button>
              <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded" onClick={handleDelete}>
                Delete
              </button>
            </div>
        </div>
    </div>
  )
}

export default ModalConfirmationUnSubscripe