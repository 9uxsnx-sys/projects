"use client";

export default function TestCategoriesPage() {
  const rows = [
    { font: "font-switzer font-bold", label: "Switzer Bold" },
    { font: "font-switzer font-medium", label: "Switzer Medium" },
    { font: "font-synonym font-bold", label: "Synonym Bold" },
    { font: "font-synonym font-medium", label: "Synonym Medium" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="w-full bg-white">
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-2 border-b border-gray-200">
            {/* Left: Big 1:1 image */}
            <div className="relative aspect-square overflow-hidden bg-neutral-900">
              <img
                src="/assets/images/categories-new/women-outerwear-big.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
              />
            </div>

            {/* Right: 2 small 1:1 images + title below */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square overflow-hidden bg-neutral-900">
                  <img
                    src="/assets/images/categories-new/women-outerwear-small-1.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden bg-neutral-900">
                  <img
                    src="/assets/images/categories-new/women-outerwear-small-2.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
                  />
                </div>
              </div>
              {/* Category title below */}
              <div className="flex flex-col items-start px-2 py-4">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  {row.label}
                </p>
                <span className={`${row.font} text-black text-[clamp(3rem,7vw,7rem)] leading-[1]`}>
                  Women's Outerwear & Blazers
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
