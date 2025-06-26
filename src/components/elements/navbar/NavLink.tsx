interface NavLinkProps {
  href: string;
  text: string;
  isActive?: boolean;
}

export const NavLink = ({ href, text, isActive = false }: NavLinkProps) => {
  return (
    <li className="flex items-center justify-center">
      <a 
        href={href}
        className={`
          flex items-center justify-center h-20 px-6 transition-colors duration-200
          ${isActive 
            ? 'text-[#FBBF00]' // Gold color for active state
            : 'text-white hover:text-[#FBBF00]'
          }
        `}
      >
        <span className="text-base font-normal whitespace-nowrap">
          {text}
        </span>
      </a>
    </li>
  );
}; 