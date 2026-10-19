import { css } from "@emotion/react";

// Title, subtitle and "Shop" button are already part of these images,
// so we only render the images themselves at their natural ratio.
const featuredImg = [
    {title: "/featured/f1.avif", alt: "Level Up for After Dark Tour Training"},
    {title: "/featured/f2.avif", alt: "Air Jordan 5 'Halloween'"},
]

export const Featured = () => {
    return (
        <section
            css={css`
                padding: 80px 48px;
                @media (max-width: 768px) { padding: 40px 16px; }
            `}
        >
            <h3
                css={css`
                    font-size: 22px;
                    font-weight: 500;
                    color: #111111;
                `}
            >
                Featured
            </h3>

            <div
                css={css`
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    margin-top: 36px;
                    @media (max-width: 768px) { grid-template-columns: 1fr; }
                `}
            >
                {featuredImg.map((item, idx) => (
                    <a
                        key={idx}
                        href="#"
                        css={css`
                            display: block;
                            overflow: hidden;
                        `}
                    >
                        <img
                            src={item.title}
                            alt={item.alt}
                            css={css`
                                width: 100%;
                                height: auto;
                                display: block;
                            `}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};
