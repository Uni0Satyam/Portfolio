function SecondaryButton({ title, icon, isDisabled }) {
    return (
        <button className={`p-3 text-center rounded-lg md:w-42 mt-5 me-5 transition duration-500 ${isDisabled ? "bg-gray-700 cursor-not-allowed opacity-60" : "bg-[var(--primary)] text-[var(--white)] hover:ring-2 ring-[var(--white)]"}
  `} type="submit">{title} {icon}</button>
    );
}

export default SecondaryButton;