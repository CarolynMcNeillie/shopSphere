import {Link} from '@remix-run/react';
import {Phone} from '~/Components';
import Globe from '~/Components/Globe';

function PageLink({url, label}: {url: string; label: string}) {
  return (
    <li className="bg-[#79DFFF] inline-block m-4">
      <Link to={url} className="px-20 py-10 block">
        {label}
      </Link>
    </li>
  );
}

export default function Homepage() {
  return (
    <div className="home min-h-screen flex items-center justify-center flex-col">
      <Phone />
      <ul className="inline">
        <PageLink url="/pop" label="Pop" />
        <PageLink url="/fabric" label="Fabric" />
        <PageLink url="/leather" label="Leather" />
        <PageLink url="/flowers" label="Flowers" />
        <PageLink url="/paint" label="Paint" />
        <PageLink url="/shoes" label="Shoes" />
        <PageLink url="/plastic" label="Plastic" />
      </ul>
    </div>
  );
}
