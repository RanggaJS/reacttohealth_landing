import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label, mobile, onClick }) => {
  return (
    <a
      href={href}
      className={`${
        mobile
          ? 'block py-2 text-gray-800 hover:text-green-600 transition-colors'
          : 'text-gray-800 font-medium hover:text-green-600 transition-colors'
      }`}
      onClick={onClick}
    >
      {label}
    </a>
  );
};