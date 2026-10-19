import {css} from "@emotion/react"

const footerData = [
    {title: "© 2026 Nike, Inc. All rights reserved"},
    {title: "Terms of Use"},
    {title: "Nike Privacy Policy"},
    {title: "Store Claim Policy"}
]

export const Footer = () => {
    return (
        <>
            <footer css={css`
                margin: 0 54px;
                padding: 48px 0px;
                @media (max-width: 768px) { margin: 0 16px; }
            `}>
                <div css={css`
                   display: flex;
                    justify-content: start;
                    flex-wrap: wrap;
                    padding-bottom: 64px;
                    gap: 20px;
                    
                `}>
                    {footerData.map((item, idx)=>(
                        <>
                            <a key={idx} css={css`
                        font-size: 14px;
                        font-weight: 500;
                        color: #707072;
                    `} href="#">
                                {item.title}
                            </a>
                        </>
                    ))}
                </div>
            </footer>
        </>
    )
}
