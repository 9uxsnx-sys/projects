export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-24">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-black text-6xl font-light tracking-[0.2em] uppercase">
          {{BRAND_NAME}}
        </h1>
        <div className="h-[1px] w-12 bg-black mx-auto"></div>
        <p className="text-zinc-400 text-sm tracking-widest uppercase">
          {{NICHE_DESCRIPTION}} — Portfolio Project #X
        </p>
        <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed italic">
          "A brief editorial description of the brand philosophy goes here."
        </p>
        <div className="pt-12">
          <button className="px-12 py-4 border border-black text-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500">
            Explore Collection
          </button>
        </div>
      </div>
    </main>
  );
}
