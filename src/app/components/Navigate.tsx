'use client';
import { LOADING_STATES, NavigationContext, useNavigationContext } from "../context/NavigationContext";
import Link from "next/link";
import { useLayoutEffect, useContext } from "react";
import { usePathname } from "next/navigation";

type NavigateProps = {
  href: string;
  children: React.ReactNode;
  disabled? : Boolean;
};

export default function Navigate({ href, children, disabled }: NavigateProps) {
  const { goToRoute, loading, setLoading } = useContext(NavigationContext)
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    goToRoute(href);
  };

  useLayoutEffect(() => {
    setLoading(LOADING_STATES.LOADED);
  }, [pathname]);

  return (
    <Link href={href} prefetch passHref legacyBehavior>
      <a onClick={handleClick}  className = {disabled && 'pointer-events-none'} >{children}</a>
    </Link>
  );
}
