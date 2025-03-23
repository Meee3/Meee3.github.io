interface ContentSectionProps {
    // title?: string;
    // children?: React.ReactNode;
    // isOpen?: boolean;
    onToggle?: () => void;
}

export default function ContentSection({
    // title,
    // children,
    // isOpen = true,
    onToggle
}: ContentSectionProps) {
    return (
        <div className="content_block">
            <div
                className="titulo_container_sections"
                onClick={onToggle}
                style={{ cursor: onToggle ? 'pointer' : 'default' }}
            >
                <h2 className="titulo_container_sections_text">
                    {/* {title} {onToggle && (isOpen ? '▼' : '►')} */}
                </h2>
            </div>

            {/* {isOpen && (
                <div className="mt-4">
                    {children}
                </div> */}
            )}
        </div>
    );
}
