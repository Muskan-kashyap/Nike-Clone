import {css} from "@emotion/react"
import {useRef} from "react";

const freshDropsData = [
    {
        img: "/fresh/p1.avif",
        title: "Nike Vomero 18",
        category: "Women's Road Running Shoes",
        price: "₹13,295",
    },
    {
        img: "/fresh/p2.avif",
        title: "Nike Hybrid RN",
        category: "Women's Training Shoes",
        price: "₹13,995",
    },
    {
        img: "/fresh/p3.avif",
        title: "Nike Pegasus 42",
        category: "Women's Road-Running Shoes",
        price: "₹12,995",
    },
    {
        img: "/fresh/p4.avif",
        title: "Air Jordan 1 High OG 'Royal'",
        category: "Older Kid's Shoes",
        price: "₹10,295",
    },
]

const arrowStyle = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);

    :hover {
        background-color: #e5e5e5;
        @media (max-width: 768px) { display: none; }
    }
`

export const FreshDrops = () => {
    const sliderRef = useRef(null);

    const slide = (direction) => {
        const el = sliderRef.current;
        if (!el) return;
        // scroll by roughly one card (card width + gap)
        const card = el.firstElementChild;
        const step = card ? card.offsetWidth + 15 : 560;
        el.scrollBy({left: direction * step, behavior: "smooth"});
    };

    return (
        <section
            css={css`
                padding: 40px 48px 80px;
                @media (max-width: 768px) { padding: 24px 16px 40px; }
            `}
        >
            <h3
                css={css`
                    font-size: 22px;
                    font-weight: 500;
                    color: #111111;
                `}
            >
                Fresh Drops
            </h3>

            <div
                css={css`
                    position: relative;
                    margin-top: 36px;
                `}
            >
                <button
                    aria-label="Previous"
                    onClick={() => slide(-1)}
                    css={css`
                        ${arrowStyle};
                        left: 22px;
                    `}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            stroke="#111111"
                            strokeWidth="1.5"
                            d="M15.525 18.966L8.558 12l6.967-6.967"
                        />
                    </svg>
                </button>

                <button
                    aria-label="Next"
                    onClick={() => slide(1)}
                    css={css`
                        ${arrowStyle};
                        right: 22px;
                    `}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            stroke="#111111"
                            strokeWidth="1.5"
                            d="M8.474 5.033L15.442 12l-6.968 6.967"
                        />
                    </svg>
                </button>

                <div
                    ref={sliderRef}
                    css={css`
                        display: flex;
                        gap: 15px;
                        overflow-x: auto;
                        scroll-behavior: smooth;
                        scrollbar-width: none;

                        &::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                >
                    {freshDropsData.map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            css={css`
                                flex: 0 0 30%;
                                min-width: 320px;
                                display: block;
                                color: #111111;
                                @media (max-width: 768px) { flex: 0 0 70%; min-width: 240px; }
                            `}
                        >
                            <img
                                src={item.img}
                                css={css`
                                    width: 100%;
                                    aspect-ratio: 1 / 1;
                                    object-fit: cover;
                                    display: block;
                                    background-color: #f5f5f5;
                                `}
                            />

                            <div
                                css={css`
                                    padding-top: 18px;
                                `}
                            >
                                <h4
                                    css={css`
                                        font-size: 16px;
                                        font-weight: 500;
                                    `}
                                >
                                    {item.title}
                                </h4>
                                <p
                                    css={css`
                                        font-size: 16px;
                                        color: #707072;
                                        margin-top: 2px;
                                    `}
                                >
                                    {item.category}
                                </p>
                                <p
                                    css={css`
                                        font-size: 16px;
                                        font-weight: 500;
                                        margin-top: 8px;
                                    `}
                                >
                                    {item.price}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
