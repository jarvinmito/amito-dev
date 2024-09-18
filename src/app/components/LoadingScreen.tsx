import HackedText from "@/app/components/Branding/Cyberpunk/HackedText";

export default function LoadingScreen({ text }: { text: string }) {
  return (
    <section className="container min-h-screen max-w-3xl mx-auto flex flex-col justify-start gap-8 py-10 px-5 xl:px-0">
      <h2 className="uppercase">
        <HackedText text={text} />
      </h2>
    </section>
  );
}
