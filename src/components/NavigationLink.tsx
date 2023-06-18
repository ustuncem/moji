interface Props {
  path: string;
  placeholder: string;
}

function NavigationLink({path, placeholder}: Props) {
  return (
    <li className="nav-link px-4 last:pr-0 font-semibold text-primary relative">
      <a href={path}>
        <span className="nav-placeholder uppercase">{placeholder}</span>
      </a>
    </li>
  );
}

export default NavigationLink;
