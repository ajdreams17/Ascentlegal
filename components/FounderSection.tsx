{/* MOBILE NAME OVERLAY */}
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091f34] via-[#091f34]/90 to-transparent px-6 pb-5 pt-24 md:hidden">

  <h3
    className="font-serif text-[29px] font-semibold leading-tight drop-shadow-lg"
    style={{ color: "#ffffff" }}
  >
    {name}
  </h3>

  <p
    className="mt-2 max-w-[95%] text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.11em]"
    style={{ color: "#e3a06a" }}
  >
    {title}
  </p>

  <div className="mt-3 flex items-center text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
    View Profile
    <ArrowRight className="ml-2 h-4 w-4" />
  </div>

</div>