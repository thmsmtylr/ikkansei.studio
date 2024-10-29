import Link from "next/link";
import { Grid } from "./Grid";
import { Logo } from "./Logo";
import { LayoutQuery } from "@/types/generated";

export function Header({
  title,
  mainMenu,
}: {
  title: string;
  mainMenu: LayoutQuery["mainMenu"];
}) {
  return (
    <header className="relative z-20 pt-6">
      <Grid>
        <div className="sm:col-start-2 sm:col-end-5">
          <Link
            href="/"
            className="inline-flex h-full items-center justify-start"
          >
            <Logo title={title} />
          </Link>
        </div>
        {/* https://www.framer.com/motion/examples/#drag */}
        {/* https://www.radix-ui.com/primitives/docs/components/dropdown-menu */}
        {/* <div className="items-center justify-end sm:col-start-7 sm:col-end-13 sm:flex">
          <div className="flex min-w-20 items-center justify-center gap-8 rounded-full bg-frosting-cream px-3 py-1 font-sans text-jurassic-park transition-colors duration-500 text-xs hover:bg-jurassic-park hover:text-frosting-cream">
            Close
          </div>
        </div> */}
        {mainMenu && mainMenu.navigationItems?.length > 0 && (
          <nav className="hidden items-center justify-end font-sans font-bold text-jurassic-park text-sm/4 sm:col-start-7 sm:col-end-13 sm:flex dark:text-frosting-cream">
            Menu
            {/* <ul
              role="navigation"
              className="flex h-full items-center justify-end gap-8 font-sans text-base"
            >
              {mainMenu.navigationItems.map((item) => {
                const external = item?.external;
                return (
                  <li key={item.id}>
                    {external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        className="text-frosting-cream hover:underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        className="relative inline-block text-frosting-cream after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-frosting-cream after:transition-all after:ease-in-out after:content-[''] hover:after:scale-x-100"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul> */}
          </nav>
        )}
      </Grid>
    </header>
  );
}
