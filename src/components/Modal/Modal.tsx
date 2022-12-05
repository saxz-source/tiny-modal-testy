import React from "react";
import { useEffect, useState } from "react";
import "./modal.css";
// import {
//     CloseModalCSSProperties,
//     ModalCSSProperties,
// } from "../../Types/ModalCSSProperties";

type ModalProps = {
    modalMessages: string[];
    isOpen: boolean;
    backGroundShadow: boolean;
    closeModal: () => void;
    modalCSSProperties?: ModalCSSProperties;
    closeModalCSSProperties?: CloseModalCSSProperties;
};

type ModalCSSProperties = {
    zIndex?: number;
    backgroundColor?: string;
    color?: string;
    boxShadow?: string;
    fontWeight?: number;
};

type CloseModalCSSProperties = {
    backgroundColor?: string;
    color?: string;
};

const Modal = ({
    modalMessages,
    isOpen,
    closeModal,
    backGroundShadow,
    modalCSSProperties,
    closeModalCSSProperties
}: ModalProps) => {
    const [open, setOpen] = useState(false);

    /**
     * Close the modal
     * @returns {void}
     */
    const onCloseModal = (): void => {
        setOpen(false);
       if (closeModal) closeModal();
    };

    // Handle the visibility of the modal
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            {open && (
                <div
                    className={
                        (backGroundShadow
                            ? "shadowBackground"
                            : "transparentBackground") + " modalPage"
                    }
                    onClick={onCloseModal}
                >
                    <div className="modal" style={modalCSSProperties}>
                        {modalMessages?.map((m: string) => {
                            return (
                                <p
                                    className="modal--message"
                                    key={new Date().toString()}
                                >
                                    {m}
                                </p>
                            );
                        })}
                        <span
                            className="modal--close"
                            onClick={onCloseModal}
                            style={closeModalCSSProperties}
                        >
                            X
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
