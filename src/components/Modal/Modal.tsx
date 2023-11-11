import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import styles from './Modal.module.css'

interface ModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(true)
  const modalRef = useRef<any>(null)

  const closeModal = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeModal);

    return () => {
      document.removeEventListener('click', closeModal);
    }
  }, [])

  return (
    <>
      {
        isOpen && <div ref={modalRef} className={styles.modal}>{children}</div>
      }
    </>
  )
}

export default Modal