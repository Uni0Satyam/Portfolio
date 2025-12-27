function Button({title,icon}) {
    return (
        <button className="p-3 text-center inset-ring-2 inset-ring-[var(--primary)] text-[var(--primary)] shadow-md 
        rounded-lg md:w-42 transition-shadow duration-500 mt-5 cursor-pointer hover:shadow-[0_0_10px_1px_var(--primary)]">{title} <span className="text-xl">{icon}</span></button>
    );
}

export default Button;