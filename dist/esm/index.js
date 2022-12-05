import React, { useState, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".modalPage {\r\n    background-color: transparent;\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal {\r\n    padding: 1.5rem 2rem;\r\n    position: relative;\r\n    background-color: white;\r\n    border-radius: 6px;\r\n    box-shadow: 2px 1px 1px 2px rgba(174, 174, 174, 0.612);\r\n    transition: 0.3s;\r\n}\r\n\r\n.modal--close {\r\n    position: absolute;\r\n    top: 0.1rem;\r\n    right: 0.1rem;\r\n    width: 1.4rem;\r\n    height: 1.4rem;\r\n    border-radius: 100%;\r\n    background-color: black;\r\n    color: white;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.85rem;\r\n    transition: 0.2s;\r\n}\r\n\r\n.transparentBackground {\r\n    background-color: transparent;\r\n    transition: 0.3s;\r\n}\r\n\r\n.shadowBackground {\r\n    background-color: rgba(0, 0, 0, 0.208);\r\n    transition: 0.3s;\r\n}\r\n";
styleInject(css_248z);

const Modal = ({ modalMessages, isOpen, closeModal, backGroundShadow, modalCSSProperties, closeModalCSSProperties }) => {
    const [open, setOpen] = useState(false);
    /**
     * Close the modal
     * @returns {void}
     */
    const onCloseModal = () => {
        setOpen(false);
        if (closeModal)
            closeModal();
    };
    // Handle the visibility of the modal
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);
    return (React.createElement(React.Fragment, null, open && (React.createElement("div", { className: (backGroundShadow
            ? "shadowBackground"
            : "transparentBackground") + " modalPage", onClick: onCloseModal },
        React.createElement("div", { className: "modal", style: modalCSSProperties }, modalMessages === null || modalMessages === void 0 ? void 0 :
            modalMessages.map((m) => {
                return (React.createElement("p", { className: "modal--message", key: new Date().toString() }, m));
            }),
            React.createElement("span", { className: "modal--close", onClick: onCloseModal, style: closeModalCSSProperties }, "X"))))));
};

export { Modal };
//# sourceMappingURL=index.js.map
