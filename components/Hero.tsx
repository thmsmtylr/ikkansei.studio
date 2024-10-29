import { FlipWords } from "@/components/FlipWords";
import { ParallaxTilt } from "@/components/ParallaxTilt";

export function Hero() {
  return (
    <div className="flex h-[768px] flex-col items-start justify-center gap-3 sm:col-start-2 sm:col-end-13">
      <h2>
        <span className="sr-only">
          We specealize in delivering lasting value in the form of brands,
          websites, and products.
        </span>
        <FlipWords
          duration={300}
          className="text-jurassic-park text-7xl dark:text-frosting-cream"
          words={[
            "We specealize in delivering lasting value in the form of brands, websites, and products.",
          ]}
        />
      </h2>
      <div className="flex items-center justify-start gap-3">
        <ParallaxTilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
          <a
            href="mailto:hello@ikkansei.studio"
            className="inline-flex items-center justify-center overflow-visible rounded-full px-2 py-1.5 font-sans duration-500 text-xs/4 dark:border-frosting-cream dark:text-frosting-cream dark:hover:bg-frosting-cream dark:hover:text-black"
          >
            hello@ikkansei.studio
          </a>
        </ParallaxTilt>
        <ParallaxTilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
          <a
            href="tel:+61411111111"
            className="inline-flex items-center justify-center overflow-visible rounded-full px-2 py-1.5 font-sans duration-500 text-xs/4 dark:border-frosting-cream dark:text-frosting-cream dark:hover:bg-frosting-cream dark:hover:text-black"
          >
            +61 433 991 283
          </a>
        </ParallaxTilt>
      </div>
    </div>
  );
}
