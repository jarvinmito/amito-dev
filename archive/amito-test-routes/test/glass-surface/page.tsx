import ReactBitsGlassSurface from "@/components/ReactBitsGlassSurface";

const stripes = [
  "bg-[#ff4d4d]",
  "bg-[#f6d365]",
  "bg-[#58d68d]",
  "bg-[#45b7ff]",
  "bg-[#7d5fff]",
  "bg-[#ff7ab6]",
];

export default function GlassSurfaceTestPage() {
  return (
    <main className="min-h-[260vh] bg-white text-black">
      <div className="fixed left-1/2 top-8 z-50 w-[min(88vw,760px)] -translate-x-1/2">
        <ReactBitsGlassSurface
          width="100%"
          height={148}
          borderRadius={50}
          backgroundOpacity={0.1}
          saturation={1}
          borderWidth={0.07}
          brightness={50}
          opacity={0.93}
          blur={11}
          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          className="px-10 py-8"
        >
          <div className="flex w-full items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">
                React Bits sample
              </p>
              <h1 className="pt-2 text-3xl font-semibold leading-none text-black">
                Glass Surface
              </h1>
            </div>
            <p className="max-w-64 text-right text-base leading-relaxed text-black/70">
              Scroll the page and watch the bold background pass behind this
              surface.
            </p>
          </div>
        </ReactBitsGlassSurface>
      </div>

      <section className="grid min-h-screen place-items-center px-8 pt-56">
        <div className="max-w-5xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.35em] text-black/45">
            Try scrolling
          </p>
          <h2 className="pt-8 text-7xl font-black leading-none md:text-9xl">
            The Summer Of Glass
          </h2>
        </div>
      </section>

      <section className="grid min-h-screen grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 18 }).map((_, index) => (
          <div
            key={index}
            className={`${stripes[index % stripes.length]} flex min-h-48 items-center justify-center border border-black/10`}
          >
            <p className="rotate-[-8deg] text-5xl font-black uppercase text-black md:text-7xl">
              Glass
            </p>
          </div>
        ))}
      </section>

      <section className="min-h-screen bg-black px-8 py-48 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <article key={index} className="border border-white/25 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Content behind glass
              </p>
              <h3 className="pt-5 text-5xl font-bold leading-none">
                Refraction target {index + 1}
              </h3>
              <p className="pt-6 text-xl leading-relaxed text-white/70">
                High contrast edges and color changes make backdrop distortion
                easier to see while the fixed surface remains in place.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
