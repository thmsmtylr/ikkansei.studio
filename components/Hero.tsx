import { FlipWords } from "@/components/FlipWords";
import { ParallaxTilt } from "@/components/ParallaxTilt";
import { encodeString } from "@/utils/encodeString";
import { metadata } from "@/app/layout";

export function Hero() {
  return (
    <div className="col-span-full -mt-[49.75px] flex h-dvh flex-col items-start justify-center gap-3 sm:col-start-2 sm:col-end-13">
      <h2>
        <span className="sr-only">{metadata.description}</span>
        <FlipWords
          duration={300}
          className="text-jurassic-park text-7xl dark:text-frosting-cream"
          words={[metadata.description]}
        />
      </h2>
      <div className="flex items-center justify-start gap-3">
        <ParallaxTilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
          <a
            href={`mailto:${encodeString("hello@ikkansei.studio")}`}
            className="inline-flex items-center justify-center overflow-visible rounded-full px-2 py-1.5 font-sans text-jurassic-park duration-500 text-xs/4 hover:bg-jurassic-park hover:text-frosting-cream dark:text-frosting-cream dark:hover:bg-frosting-cream dark:hover:text-black"
          >
            hello@ikkansei<b className="hidden">.hidden</b>.studio
          </a>
        </ParallaxTilt>
        <ParallaxTilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
          <a
            href={`tel:${encodeString("+61433991283")}`}
            className="inline-flex items-center justify-center overflow-visible rounded-full px-2 py-1.5 font-sans duration-500 text-xs/4 hover:bg-jurassic-park hover:text-frosting-cream dark:text-frosting-cream dark:hover:bg-frosting-cream dark:hover:text-black"
          >
            +61 <b className="hidden">.hidden</b>433 991
            <b className="hidden">.hidden</b> 283
          </a>
        </ParallaxTilt>
      </div>
    </div>
  );
}
