"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function NavigationButton({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  }, [href, onClick, router]);

  return (
    <button
      type="button"
      className="flex cursor-pointer rounded-2xl px-4 py-2 whitespace-nowrap hover:bg-cyan-100"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
