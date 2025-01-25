import React, { useState } from 'react'

const useDisclose = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return { isOpen, handleClose, handleOpen }
}

export default useDisclose