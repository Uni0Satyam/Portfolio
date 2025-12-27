import { HashLink } from "react-router-hash-link";

function SmallBadge({ title, icon, link }) {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            <HashLink className="px-2 py-1 ring-1 ring-[var(--primary)]
            rounded-full text-xs bg-[var(--secondary)] font-semibold text-[var(--white)]" smooth to={link}> {title} {icon}</HashLink>
        </div>
    );
}

export default SmallBadge;