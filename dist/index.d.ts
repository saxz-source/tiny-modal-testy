declare type ModalProps = {
    modalMessages: string[];
    isOpen: boolean;
    backGroundShadow: boolean;
    closeModal: () => void;
    modalCSSProperties?: ModalCSSProperties;
    closeModalCSSProperties?: CloseModalCSSProperties;
};
declare type ModalCSSProperties = {
    zIndex?: number;
    backgroundColor?: string;
    color?: string;
    boxShadow?: string;
    fontWeight?: number;
};
declare type CloseModalCSSProperties = {
    backgroundColor?: string;
    color?: string;
};
declare const Modal: ({ modalMessages, isOpen, closeModal, backGroundShadow, modalCSSProperties, closeModalCSSProperties }: ModalProps) => any;

export { Modal };
