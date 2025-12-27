function Badge({title,icon}) {
    return (
        <button className="p-3 text-center inset-ring-2 inset-ring-[var(--primary)] text-[var(--white)] shadow-sm
        rounded-lg w-fitt transition-shadow duration-500 mt-5 hover:shadow-[0_0_10px_1px_var(--primary)]"><span className="text-xl">{icon}</span> {title}</button>
    );
}

export default Badge;