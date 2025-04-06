import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";

function Header() {
  const user = null; // Replace with actual user data if needed

  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/goatius.png"}
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />
        <h1 className="text-primary flex flex-col text-2xl font-bold">
          GOAT <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href={"/register"}>Register</Link>
            </Button>
            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
