interface SectionTitleProps {
    title: string;
    className?: string;
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
    return (
        <div className={`titulo_container_sections ${className}`}>
            <div className="titulo_container_sections_text">
                <h2>
                    <a href="#">{title}</a>
                </h2>
            </div>



        </div >

    );
}
