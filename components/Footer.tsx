import { Grid } from "./Grid";

export function Footer() {
  return (
    <footer className="text-xxs fixed bottom-0 left-0 w-full pb-6">
      <Grid>
        <div className="col-span-3 sm:col-span-6">
          © {new Date().getFullYear()} ikkansei<span className="mx-1">—</span>
          Melbourne, AUS
        </div>
        <div className="col-span-3 sm:col-span-6">
          <div className="flex justify-end">
            <a
              href="https://www.instagram.com/ikkanseistudio/profilecard/?igsh=cGNrb20wYmxtZGRi"
              className="inline-flex hover:underline hover:underline-offset-2"
              target="_blank"
            >
              Instagram
            </a>
            <span className="mx-1">—</span>
            <a
              href="https://www.linkedin.com/company/ikkansei"
              className="inline-flex hover:underline hover:underline-offset-2"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Grid>
    </footer>
  );
}
