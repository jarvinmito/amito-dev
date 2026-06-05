export default function BucketListPage() {
  return (
    <div className="space-y-16 pb-24 pt-12 md:space-y-20 md:pb-32 md:pt-16">
      <header className="space-y-6 md:space-y-8">
        <h1 className="text-[clamp(2rem,4.75vw,3.85rem)] font-semibold tracking-[-0.03em] text-black">
          Bucket list
        </h1>
        <p className="w-full max-w-none text-xl leading-relaxed text-neutral-600 md:text-2xl">
          A sparse scratchpad — jot down the next unreasonable thing you want to
          chase.
        </p>
      </header>
      <label className="block w-full space-y-5 border-t border-black/10 pt-14 md:space-y-6 md:pt-20">
        <span className="text-base font-mono uppercase tracking-[0.32em] text-neutral-400 md:text-lg">
          Next item
        </span>
        <input
          type="text"
          placeholder="e.g. Northern lights, quiet month offline"
          className="w-full border-0 border-b-2 border-black/15 bg-transparent py-6 text-xl outline-none transition-colors placeholder:text-neutral-400 focus:border-black md:text-2xl md:py-8"
        />
      </label>
    </div>
  );
}
