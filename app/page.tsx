import { Grid } from "@/components/Grid";
import { ImageHover } from "@/components/ImageHover";
import { ParallaxTilt } from "@/components/ParallaxTilt";
import { ScrollLine } from "@/components/ScrollLine";

export default function Home() {
  return (
    <main className="-mt-[5.859rem] mb-32 flex min-h-screen flex-col items-center overflow-hidden">
      <Grid>
        <ScrollLine
          className="relative col-span-12 grid grid-cols-6 gap-x-20 gap-y-32 sm:grid-cols-12"
          left="left-[5.375rem]"
          top="top-[3.25rem]"
        >
          <div className="-mr-10 sm:col-start-5 sm:col-end-13">
            <ImageHover className="rounded-bl-xxl rounded-tl-xxl">
              <img
                src="https://www.datocms-assets.com/53320/1704778138-page-7_elsewhere-in-india-avatars-2079-2023-digital-art-bhavani-kumar.jpg?auto=format&dpr=0.54&w=2972"
                alt="test"
                className="aspect-video h-[568px] w-full object-cover"
              />
            </ImageHover>
          </div>
          <div className="-mt-[calc(1.375rem+8rem)] flex flex-col gap-9 sm:col-start-2 sm:col-end-7">
            <div className="font-sans text-xs">Arts & Culture</div>
            <h2 className="text-7xl">4A Centre for Contemporary Asian Art</h2>
          </div>
        </ScrollLine>
        <div className="sm:col-start-1 sm:col-end-7">
          <ParallaxTilt className="mt-32 flex flex-col gap-4">
            <ImageHover>
              <img
                className="aspect-video"
                src="https://www.datocms-assets.com/36179/1680761749-on-hold-opus-number-1.jpg?ar=5%3A3&auto=format&crop=focalpoint&fit=crop&h=800"
                alt="text"
              />
            </ImageHover>
            <div className="flex flex-col gap-1">
              <div className="font-sans text-xs">Arts & Culture</div>
              <h2 className="text-4xl">Gertrude Contemporary</h2>
            </div>
          </ParallaxTilt>
        </div>

        <div className="sm:col-start-9 sm:col-end-13">
          <ParallaxTilt className="flex flex-col gap-4">
            <ImageHover>
              <img
                className="aspect-video"
                src="https://cdn.sanity.io/images/ovv6mlxx/production/b9ea61b6511985d66c1e9e14a6d88c6b96882e79-4861x3235.jpg?rect=0,2,4861,3233&w=1600&h=1064&auto=format"
                alt="text"
              />
            </ImageHover>
            <div className="flex flex-col gap-1">
              <div className="font-sans text-xs">Interior design</div>
              <h2 className="text-4xl">Verhaal</h2>
            </div>
          </ParallaxTilt>
        </div>

        <ScrollLine className="relative flex flex-col gap-1 sm:col-start-4 sm:col-end-11">
          <h2 className="text-4xl">
            Ikkanei is an independent design&#8209;led development studio studio
            based in Melbourne, Australia.
          </h2>
          <div className="font-sans underline text-xs">Read more</div>
        </ScrollLine>

        <div className="-ml-10 sm:col-start-1 sm:col-end-12">
          <div className="relative h-full w-full">
            <ImageHover className="rounded-br-xxl rounded-tr-xxl">
              <img
                className="aspect-video h-[768px] w-full object-cover"
                src="https://cdn.sanity.io/images/su2g61vr/production/a0fa50c45c38b4ab68065cf52d7b7b8fb51020df-2560x1707.jpg?w=2000&h=1334&fit=crop&fm=webp"
                alt="text"
              />
            </ImageHover>
            <div className="absolute bottom-16 left-10 flex flex-col gap-1 text-frosting-cream">
              <div className="font-sans text-xs">Landscape Architecture</div>
              <h2 className="text-7xl">Goodmanors</h2>
            </div>
          </div>
        </div>

        <div className="sm:col-start-1 sm:col-end-4">
          <ParallaxTilt className="flex flex-col gap-4">
            <ImageHover>
              <img
                className="aspect-video"
                src="https://cdn.sanity.io/images/svx3swru/production/055118bcc6adf2b6666d86c5b67bfbd1bb690e1b-2624x1632.jpg?w=2624&h=1632&auto=format"
                alt="text"
              />
            </ImageHover>
            <div className="flex flex-col gap-1">
              <div className="font-sans text-xs">
                Architectural Construction
              </div>
              <h2 className="text-4xl">From Marsh to Mansion</h2>
            </div>
          </ParallaxTilt>
        </div>

        <div className="sm:col-start-6 sm:col-end-13">
          <ParallaxTilt className="mt-32 flex flex-col gap-4">
            <ImageHover>
              <img
                className="aspect-video"
                src="https://www.datocms-assets.com/29237/1607995628-bhaaipmthumb4.jpg?auto=format"
                alt="text"
              />
            </ImageHover>
            <div className="flex flex-col gap-1">
              <div className="font-sans text-xs">Arts & Culture</div>
              <h2 className="text-4xl">Gertrude Contemporary</h2>
            </div>
          </ParallaxTilt>
        </div>
      </Grid>
    </main>
  );
}
