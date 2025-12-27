function SecondaryButton({title,icon}) {
    return ( 
        <button className="p-3 text-center bg-[var(--primary)] text-[var(--white)] 
        rounded-lg md:w-42 mt-5 me-5 hover:ring-2 ring-[var(--white)] transition-ring duration-500 cursor-pointer" type="submit" >{title} {icon}</button>
     );
}

export default SecondaryButton;