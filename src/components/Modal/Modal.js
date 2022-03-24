import "./styles.css"
import {useEffect, useState} from "react";

const Modal = ({visible, onClose, children}) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    } else {
      // make some delay to apply fade out animation when closing
      setTimeout(() => setShow(false), 500);
    }
  }, [visible]);

  //
  // actions
  //
  const onClickBg = (e) => {
    e.stopPropagation();

    if (e.target.className?.includes('dv-modal-container')) {
      onClose();
    }
  }

  //
  // render
  //
  if (!show) {
    return null;
  }

  return (
    <div className={`dv-modal-container ${visible ? '' : 'out'}`} onClick={onClickBg}>
      <div className="dv-modal">
        {children}
      </div>
    </div>
  );
};

export default Modal;
