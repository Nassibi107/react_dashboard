import React, { useState } from 'react'

const ModalDetailsSubscribtion = ({isOpen, onClose , libelle , id , ExpiryDate , SubDate , ActiveCode , price}) => {
    const handleCancel = () => {
        onClose();
    };
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
      const textToCopy = document.getElementById('content-to-copy');
      const range = document.createRange();
      range.selectNode(textToCopy);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  
      try {
        document.execCommand('copy');
        setCopied(true);
      } catch (error) {
        console.error('Erreur lors de la copie dans le presse-papiers', error);
      } finally {
        window.getSelection().removeAllRanges();
      }
    };
  return (
    <div className={`fixed  top-0 left-0 w-full h-full z-50 backdrop-sm bg-backgroundConfirmationModel flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-white p-5 md:mx-0 mx-2 rounded-md shadow-md md:w-[600px]">
            <div className='flex justify-center items-center flex-col my-5'>
                <h1 className='text-xl'>{libelle}</h1>
                <p className='text-lg text-slate-500'>{id}</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='capitalize'>Subscribtion date :&nbsp;<span className='text-Mybg'>{SubDate}</span></h1>
                <h1 className='capitalize'>expiry date :&nbsp;<span className='text-Mybg'>{ExpiryDate}</span></h1>
                <h1 className='capitalize'>price :&nbsp;<span className='text-Mybg'>{price}</span></h1>
                <div className='flex items-center mt-2'>
                    <h1>Active Code :&nbsp;&nbsp;</h1>
                    <div id="content-to-copy" className='bg-MybgHover py-2 px-5 rounded-md'>
                        <span className='text-white'>{ActiveCode}</span>
                    </div>
                    <button onClick={handleCopyClick} className='bg-Mybg hover:bg-MybgHover py-2 px-2 rounded-md mx-2'>
                        <span className='text-white'>
                          {copied ? 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                              </svg>
                             : 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                              </svg>
                          }
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex justify-end mt-10">
                <button className="bg-slate-100 hover:bg-slate-200 px-4 py-2 mr-2 rounded" onClick={handleCancel}>
                    Back
                </button>
            </div>
        </div>
    </div>
  )
}

export default ModalDetailsSubscribtion