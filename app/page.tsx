import { Beams } from "@/components/Beams";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center overflow-hidden pb-32">
      <Beams />
      <Grid>
        <Hero />
      </Grid>
    </main>
  );
}
