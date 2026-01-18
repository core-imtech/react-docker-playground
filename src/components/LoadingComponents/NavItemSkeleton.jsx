const NavItemSkeleton = ({ isSidebarExpand }) => {
  return (
    <div className="flex items-center gap-2 p-2">
      {/* Icon */}
      <div className="relative h-5 w-5 overflow-hidden rounded bg-slate-200">
        <div className="absolute inset-0 animate-shimmer bg-linear-to-r from-slate-200 via-slate-300 to-slate-200" />
      </div>

      {/* Label */}
      {
        isSidebarExpand
          ? (
            <div className="relative h-4 w-24 overflow-hidden rounded bg-slate-200">
              <div className="absolute inset-0 animate-shimmer bg-linear-to-r from-slate-200 via-slate-300 to-slate-200" />
            </div>
          )
          : null
      }
    </div>
  );
};

export default NavItemSkeleton;