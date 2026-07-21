export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-24">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-black text-7xl font-light tracking-[0.2em] uppercase transition-all duration-700 hover:tracking-[0.3em] cursor-default">
          Vantage
        </h1>
        <div className="h-[1px] w-12 bg-black mx-auto"></div>
        <p className="text-zinc-400 text-sm tracking-widest uppercase">
          Luxury Fashion Brand — Portfolio Project #1
        </p>
        <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed italic">
          "Redefining modern minimalism through avant-garde editorial design."
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
