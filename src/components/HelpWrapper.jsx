import React from "react";
import useModal from "./useModal";

import Help from "./Help";

const HelpWrapper = () => {
  const handleHelp = () => {
    toggle();
  };

  const handleCloseModal = () => {
    toggle();
  };

  const { isShowing, toggle } = useModal();

  return (
    <div className="help-wrapper">
      <button className="help" onClick={handleHelp}>
        ?
      </button>
      <Help isShowing={isShowing} hide={handleCloseModal} />
    </div>
  );
};

export default HelpWrapper;
