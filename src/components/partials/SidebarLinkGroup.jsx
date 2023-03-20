import React, { useState } from 'react';

export default function SidebarLinkGroup({ children, activecondition }) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`mb-0.5 rounded-lg px-3 py-2 last:mb-0 ${
        activecondition && 'bg-chambray-900'
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}
