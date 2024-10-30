import Link from "next/link";
import { Metadata } from "next";
import { Grid } from "./Grid";
import { Logo } from "./Logo";

export function Header({ title }: { title?: Metadata["title"] }) {
  return (
    <header className="relative z-20 pt-6">
      <Grid>
        <div className="sm:col-start-1 sm:col-end-5">
          <Link
            href="/"
            className="inline-flex h-full items-center justify-start"
          >
            <Logo title={title} />
          </Link>
        </div>
      </Grid>
    </header>
  );
}
