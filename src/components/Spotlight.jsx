import {css} from "@emotion/react"

const spotlightImages = [
    {img: "/spotlight/s01.jpg"},
    {img: "/spotlight/s02.jpg"},
    {img: "/spotlight/s03.jpg"},
    {img: "/spotlight/s04.jpg"},
    {img: "/spotlight/s05.jpg"},
    {img: "/spotlight/s06.jpg"},
    {img: "/spotlight/s07.jpg"},
    {img: "/spotlight/s08.jpg"},
    {img: "/spotlight/s09.jpg"},
    {img: "/spotlight/s10.jpg"},
    {img: "/spotlight/s11.jpg"},
    {img: "/spotlight/s12.jpg"},
    {img: "/spotlight/s13.jpg"},
    {img: "/spotlight/s14.jpg"},
    {img: "/spotlight/s15.jpg"},
    {img: "/spotlight/s16.jpg"},
]

export const Spotlight = () => {
    return (
        <>
            <section css={css`
                padding: 72px 0;
            `}>
                <img src="/banner.avif" css={css`object-fit: cover; width: 100%`}/>
                <img src="/banner2.avif" css={css`object-fit: cover; width: 100%; margin-top: 80px`}/>
            </section>

            <section css={css`
                margin: 0 80px;
                padding: 0 10rem;
            `}>
                <div  css={css`
                    display: grid;
                    grid-template-columns: repeat(8, 1fr);
                `}>
                    {spotlightImages.map((item, idx) => (
                        <img key={idx} src={item.img} css={css`
                        width: 100%;
                        height: auto;
                        display: block;
                      `}/>
                    ))}
                </div>
            </section>

        </>
    )
}
