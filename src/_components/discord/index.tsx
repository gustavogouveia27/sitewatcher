"use client";

export default function Discord() {
  return (
    <div className="fixed z-50 bottom-6 right-0">
      <button
        onClick={() => window.open("https://discord.gg/SEULINK", "_blank")}
        className="
          group flex items-center gap-3
          bg-[#0b1f26]
          border border-emerald-400/30
          shadow-[0_0_20px_rgba(20,184,166,0.4)]
          px-4 py-3
          rounded-l-full
          hover:pr-6
          transition-all duration-300
        "
      >
        <img src="/discord.png" className="w-7 h-7" />

        <span className="
          max-w-0 overflow-hidden
          group-hover:max-w-xs
          transition-all duration-300
          whitespace-nowrap text-white text-sm
        ">
          Entrar no Discord
        </span>
      </button>
    </div>
  );
}
