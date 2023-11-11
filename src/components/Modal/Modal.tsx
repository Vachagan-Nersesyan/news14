import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import styles from './Modal.module.css'

interface ModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(true)
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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