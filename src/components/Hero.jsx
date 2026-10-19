import {css} from "@emotion/react"

export const Hero = () => {
    return (
        <>
            <section css={css`
                height: 85vh;
                overflow: hidden;
                position: relative;
            `}>
                <div css={css`
                    position: absolute;
                    bottom: 0px;
                    z-index: 5 !important;
                    text-align: center;
                    width: 100%;
                    color: white;
                    margin-bottom: 40px;
                    @media (max-width: 768px) { padding; 0 16px; }
                `}>
                    <h3 css={css`
                        font-size: 14px;
                        margin-bottom: 10px;
                    `}>Nike Training</h3>
                    <h1 css={css`
                        text-transform: uppercase;
                        font-weight: 900;
                        margin-bottom: 10px;
                        font-size: clamp(28px, 7vw, 64px);
                    `}>Just do the write work</h1>
                    <p css={css`
                        margin-bottom: 20px;
                    `}>Gym wear that goes as hard as you do.</p>
                    <div css={css`
                        display: flex;
                        gap: 20px;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        
                        
                    `}>
                        <a href="#" css={
                            css`color: #111111;
                                background-color: white;
                                padding: 5px 20px;
                                border-radius: 160px;
                                font-size: 16px;
                                font-weight: 500;
                        `}>Explore</a>
                        <a href="#" css={
                            css`color: #111111;
                                background-color: white;
                                padding: 5px 20px;
                                border-radius: 160px;
                                font-size: 16px;
                                font-weight: 500;
                                
                        `}>Watch</a>
                    </div>
                </div>
            <video autoPlay width="100%" loop muted css={css`position: relative; object-fit: cover; display:block;`}>
                <source src="/video/video1.mp4" type="video/mp4" />
            </video>

            </section>

        </>
    )
}