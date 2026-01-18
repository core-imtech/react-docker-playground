import NavItemSkeleton from "./NavItemSkeleton";

const SidebarNavSkeleton = ({ arrayLength, isSidebarExpand }) => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-2">
            {
                Array.from({ length: arrayLength }).map((_, i) => (
                    <NavItemSkeleton key={i} isSidebarExpand={isSidebarExpand} />
                ))
            }
        </div>
    );
};

export default SidebarNavSkeleton;