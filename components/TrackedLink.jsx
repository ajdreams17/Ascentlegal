"use client";

import Link from "next/link";

export default function TrackedLink({
  href,
  eventName,
  placement,
  className = "",
  children,
  external = false,
  ...props
}) {
  function handleClick() {
    if (eventName) {
      window.gtag?.("event", eventName, {
        placement,
        destination: href,
      });
    }
  }

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
