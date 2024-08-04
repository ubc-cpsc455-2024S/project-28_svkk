import React, { useRef, useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose}) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
          onClose(); //closes modal (if cancel button pressed?)
        }
        setModalOpen(false);
      };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
    
        if (modalElement) {
          if (isModalOpen) {
            modalElement.showModal();
          } else {
            modalElement.close();
          }
        }
      }, [isModalOpen]);

      return(
        <dialog ref={modalRef} className='modal'>
            <button className="modal-close-btn" onClick={handleCloseModal}>
                Close
            </button>
        </dialog>
      );

};

export default Modal;