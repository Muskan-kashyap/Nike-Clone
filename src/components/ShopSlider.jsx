import {css} from "@emotion/react"
import {useRef} from "react";

const sliderData = [
    {title: "Running", img: "/slider/s1.avif"},
    {title: "Training", img: "/slider/s2.avif"},
    {title: "Sportswear", img: "/slider/s3.avif"},
    {title: "Cricket", img: "/slider/s4.avif"},
    {title: "Football", img: "/slider/s5.avif"},
    {title: "Basketball", img: "/slider/s6.avif"},
]

const arrowStyle = css`
    position: absolute;
    top: calc(50% - 40px);
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
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const ShopSlider = () => {
    const sliderRef = useRef(null);

    const slide = (direction) => {
        const el = sliderRef.current;
        if (!el) return;
        const card = el.firstElementChild;
        const step = card ? card.offsetWidth + 15 : 400;
        el.scrollBy({left: direction * step, behavior: "smooth"});
    };

    return (
        <section
            css={css`
                padding: 40px 48px 80px;

                @media (max-width: 768px) {
                    padding: 24px 16px 40px;
                }
            `}
        >
            <h3
                css={css`
                    font-size: 22px;
                    font-weight: 500;
                    color: #111111;
                `}
            >
                Shop by Sport
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
                        <path stroke="#111111" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"/>
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
                        <path stroke="#111111" strokeWidth="1.5" d="M8.474 5.033L15.442 12l-6.968 6.967"/>
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
                    {sliderData.map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            css={css`
                                flex: 0 0 30%;
                                min-width: 320px;
                                display: block;

                                @media (max-width: 768px) {
                                    flex: 0 0 70%;
                                    min-width: 240px;
                                }
                            `}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                css={css`
                                    width: 100%;
                                    aspect-ratio: 386 / 482;
                                    object-fit: cover;
                                    display: block;
                                `}
                            />
                            <h3
                                css={css`
                                    color: #111111;
                                    font-size: 18px;
                                    font-weight: 500;
                                    margin-top: 20px;
                                `}
                            >
                                {item.title}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}