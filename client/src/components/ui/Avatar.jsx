function Avatar({
    image,
    name = "User",
    size = "md",
}) {
    const sizes = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
    };

    const initials = name
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div
            className={`
        ${sizes[size]}
        rounded-full
        overflow-hidden
        flex
        items-center
        justify-center
        bg-primary
        text-white
        font-semibold
        shrink-0
      `}
        >
            {image ? (
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            ) : (
                initials
            )}
        </div>
    );
}

export default Avatar;