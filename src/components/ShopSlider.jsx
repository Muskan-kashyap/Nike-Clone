import {css} from "@emotion/react"

const sliderData = [
    {
        title: "Running",
        img: "/slider/s1.avif"
    },
    {
        title: "Training",
        img: "/slider/s2.avif"
    },
    {
        title: "Sportswear",
        img: "/slider/s3.avif"
    },
    {
        title: "Cricket",
        img: "/slider/s4.avif"
    },
    {
        title: "Football",
        img: "/slider/s5.avif"
    },
    {
        title: "Basketball",
        img: "/slider/s6.avif"
    },
]

export const ShopSlider = () => {
    return (
        <>
            <section css={css`
                padding: 0 48px;
            `}>

                <h3
                    css={css`
                
            `}
                >
                    Shop by Sport
                </h3>

                <div css={css`
                    margin-top: 36px;
                `}>
                    <div css={css`
                        display: flex;
                        gap: 20px;
                        overflow: scroll;
                        
                    `}>
                        {sliderData.map((item, idx)=>(
                            <>
                                <a href="#">
                                    <img css={css`
                        width: 386px;
                            height: 482px;
                        `} src={item.img}/>
                                    <h3 css={css`
                                color: #111111;
                                font-size: 18px;
                                font-weight: 500;
                                margin-top: 20px;
                            `}>{item.title}</h3>
                                </a>
                            </>
                        ))}


                    </div>
                </div>


            </section>
        </>
    )
}
