interface Props {
  path: string;
  placeholder: string;
}

function NavigationLink({path, placeholder}: Props) {
  return (
    <li className="nav-link px-4 mb-4 last:mb-0 last:pr-0 font-semibold text-primary-800 relative text-xl lg:text-lg">
      <a href={path}>
        <span className="nav-placeholder uppercase">{placeholder}</span>
      </a>
    </li>
  );
}

export default NavigationLink;
