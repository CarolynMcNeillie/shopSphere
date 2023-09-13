import {Link} from '@remix-run/react';
import Globe from '~/Components/Globe';

function PageLink({url, label}: {url: string; label: string}) {
  return (
    <li>
      <Link to={url} className="bg-[#79DFFF] px-20 py-10 inline-block m-4">{label}</Link>
    </li>
  );
}

export default function Homepage() {
  return (
    <div className="home min-h-screen flex items-center justify-center">
      <ul>
        <PageLink url="/fabric" label="Fabric" />
        <PageLink url="/leather" label="Leather" />
        <PageLink url="/flowers" label="Flowers" />
        <PageLink url="/paint" label="Paint" />
        <PageLink url="/shoes" label="Shoes" />
      </ul>
    </div>
  );
}
