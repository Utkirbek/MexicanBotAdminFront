import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ id, Icon, title, bgColor }) => {
  return (
    <>
      <p data-tip data-for={id}>
        <Icon />
      </p>
      <ReactTooltip id={id} backgroundColor={bgColor}>
        
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
