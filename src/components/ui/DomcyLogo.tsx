// Animations removed for static 3D wall-mounted effect

export const DomcyLogo = ({ className = "" }: { className?: string, variant?: "light" | "dark" }) => {
    return (
        <div className={`relative ${className}`}>
            <img
                src="/domcy-logo-3d.png"
                alt="Domcy Coffee Logo"
                className="w-full h-full object-contain filter drop-shadow-xl"
                loading="eager"
            />
        </div>
    );
};
