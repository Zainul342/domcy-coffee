// Animations removed for static 3D wall-mounted effect

export const DomcyLogo = ({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) => {
    const isDark = variant === "dark";

    return (
        <div className={`relative ${className}`}>
            <img
                src="/domcy-logo-3d.png"
                alt="Domcy Coffee Logo"
                // variant="dark" is for Light Backgrounds (Navbar) -> Needs to be Dark
                // variant="light" is for Dark Backgrounds (Hero) -> Needs to be Light (Original 3D White)
                className={`w-full h-full object-contain ${isDark
                        ? 'brightness-[0.2] contrast-125' // Dark Grey Metal look for Navbar
                        : 'filter drop-shadow-xl' // Original White 3D for Hero
                    }`}
                loading="eager"
            />
        </div>
    );
};
