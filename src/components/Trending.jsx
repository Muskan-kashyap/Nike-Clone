import {css} from "@emotion/react"

// The title, subtitle and button are already part of these images,
// so we only need to render the images themselves.
const trendingData = [
    {img: "/trending/t1.avif", alt: "Training Essentials - Bring the Burn"},
    {img: "/trending/t2.avif", alt: "Nike Sportswear - Sport Meets Style"},
    {img: "/trending/t3.avif", alt: "The road to After Dark Tour begins now"},
]

export const Trending = () => {
    return (
        <section
            css={css`
                padding: 40px 48px 80px;
            `}
        >
            <h3
                css={css`
                    font-size: 22px;
                    font-weight: 500;
                    color: #111111;
                `}
            >
                Trending
            </h3>

            <div
                css={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    margin-top: 36px;
                `}
            >
                {trendingData.map((item, idx) => (
                    <a
                        key={idx}
                        href="#"
                        css={css`
                            display: block;
                            overflow: hidden;
                        `}
                    >
                        <img
                            src={item.img}
                            alt={item.alt}
                            css={css`
                                width: 100%;
                                aspect-ratio: 500 / 614;
                                object-fit: cover;
                                display: block;
                            `}
                        />
                    </a>
                ))}
            </div>
        </section>
    )
}
