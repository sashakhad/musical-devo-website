"use client";
const sections = ["home", "about", "faq"];

export function NavBar() {
  return (
    <div className="sticky top-0 z-10 flex w-full justify-end bg-transparent px-5 py-5 text-sm text-black">
      <div className="flex gap-5 sm:gap-10">
        {sections.map((section) => (
          <Link key={section} href={`#${section}`}>
            {section}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Link({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <a
      href={href}
      className={`transition-border-color cursor-pointer border-b p-1 capitalize duration-700 hover:animate-pulse hover:border-black ${
        isActive ? "border-b !border-black" : "border-transparent"
      }`}
    >
      {children}
    </a>
  );
}
