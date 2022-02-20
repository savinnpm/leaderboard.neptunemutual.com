import Link from "next/link";
import Logo from "./Logo";

export function Header() {
  return (
    <>
      <div className="py-6 shadow-header">
        <div className="container mx-auto px-4">
          <Link href={"/"}>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
