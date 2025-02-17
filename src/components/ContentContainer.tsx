import { FC } from 'react';
import Link from "next/link";
export const ContentContainer: FC = props => {

  return (
    <div className="flex-1 drawer h-52">
     {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content">
        {props.children}
      </div>

      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/lore">
              <a>LORE</a>
            </Link>
          </li>
          <li>
            <Link href="/synx">
              <a>SYNX - STORAGE</a>
            </Link>
          </li>
          <li>
            <Link href="/servex">
              <a>SERVEX - DISCORD BOT</a>
            </Link>
          </li>
          <li>
            <Link href="/servex">
              <a>TRAX - PORTFOLIO TRACKER</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.staxing.xyz/">
              <a>STAX - STAKE YOUR NFT</a>
            </Link>
          </li>
          <li>
            <Link href="https://coinablepay.com/store/stax-store">
              <a>STORE - SPEND YOUR STAX</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>DOCS</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
