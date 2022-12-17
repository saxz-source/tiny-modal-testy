import "./modal.css";
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
declare const Modal: ({ modalMessages, isOpen, closeModal, backGroundShadow, modalCSSProperties, closeModalCSSProperties }: ModalProps) => any;
export default Modal;
