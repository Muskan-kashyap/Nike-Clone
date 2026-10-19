
import {css} from "@emotion/react"
import {useState, useRef} from "react";
import {menuData, data} from "../../data/data.js";
import {megaMenuStyle, columnStyle} from "../styles.js";

export const Header = () => {

    const [activeMenu, setActiveMenu] = useState(null);

    const timeoutRef = useRef(null);

    const handleMouseEnter = (idx) => {
        clearTimeout(timeoutRef.current);
        setActiveMenu(idx);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 200);
    };

    return (
        <>

            <header css={css`display: contents;`}>
                <div css={css`
                    display: flex;
                    justify-content: end;
                    align-items: center;
                    gap: 10px;
                    font-size: 12px;
                    color: #111111;
                    padding: .25rem 3rem;
                    background-color: #F5F5F5;
                    @media (max-width: 768px) {
                        display: none;
                    }    

                `
                }>
                    {data.map((item, idx) => (
                        <>
                            <a css={css`
                                color: #111111;
                                padding: 0px 4px;

                                :hover {
                                    color: #707072;
                                }

                            `} href={item.href}>{item.title}</a>
                            {data.length - 1 !== idx && " | "}
                        </>
                    ))}
                </div>

                <main css={css`
                    padding: 0px 48px;
                    color: #111111;
                    height: 60px;
                    display: grid;
                    grid-template-columns: repeat(12,minmax(0,1fr));
                    align-items: center;
                    justify-content: space-between;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background-color: white;
                    @media (max-width: 1024px) {
                        display: flex;
                        justify-content: space-between;
                        padding: 0 16px;
                    }                    
                `}>

                    <a href="#" css={css`
                        grid-column: span 3;
                            display: flex;
                            overflow: hidden;
                    `}>
                        <img css={css`
                                width: 80px;
                                height: 80px;
                                object-fit: cover;
                            `} src="/logo/nike-logo.svg"/>
                    </a>

                    <div css={css`
                        display: flex;
                        grid-column: span 6;
                        justify-content: center;
                        align-items: center;
                        font-size: 16px;
                        color: #111111;
                        padding: .25rem 3rem;
                        background-color: white;
                        font-weight: 500;

                        @media (max-width: 1024px) {
                            display: none;
                        }    
                        
                    `}>
                        {menuData.map((item, idx) => (

                            <div key={idx}
                                 onMouseEnter={() => handleMouseEnter(idx)}
                                 onMouseLeave={handleMouseLeave}>

                                <p css={css`
                                cursor: pointer;
                                padding: 0 12px;
                            `}>{item.title}</p>

                                {activeMenu === idx && (
                                    <div css={megaMenuStyle}>
                                        {item.megaMenu.map((section, i) => (
                                            <div key={i} css={columnStyle}>
                                                <h4>{section.heading}</h4>
                                                {section.items.map((subItem, j) => (
                                                    <p key={j}>{subItem}</p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                        }
                    </div>

                    <div css={css`
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        grid-column: span 3;
                        gap: 20px;
                    `}>
                        <div css={css`
                            display: flex;
                            background-color: #f5f5f5;
                            padding: 8px;
                            border-radius: 50px;
                            align-items: center;
                            width: 180px;
                            @media (max-width: 768px) {
                                display: none;
                            }    

                        `}>
                            <div css={css`
                                display: flex;
                            `}>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px"
                                     height="24px" fill="none">
                                    <path stroke="#111111" stroke-width="1.5"
                                          d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                                </svg>
                            </div>
                            <div css={css`

                            `}>
                                <input css={css`
                                    border: none;
                                    font-weight: bold;
                                    font-size: 16px;
                                    padding: 0 10px;
                                    background-color: transparent;
                                `} placeholder="Search"/>
                            </div>
                        </div>

                        <div css={css`
                            background-color: white;
                        `}>
                                <span><svg viewBox="0 0 24 24"
                                           width="24" height="24"
                                           fill="transparent"
                                           className=""><path
                                    stroke="#111111" stroke-width="1.5"
                                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg></span>
                        </div>
                        <div css={css`
                            background-color: white;
                        `}>
                            <span><svg aria-hidden="true" focusable="false"
                                       viewBox="0 0 24 24" role="img" width="24px"
                                       height="24px" fill="transparent"><path
                                stroke="#111111" stroke-width="1.5"
                                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg></span>
                        </div>
                    </div>
                </main>

                <div css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    font-size: 12px;
                    color: #111111;
                    padding: 9px 16px;
                    background-color: #F5F5F5;

                `
                }>
                    <p>Get Free Delivery in 2-4 days. Easy Returns & Size Exchanges. <a href="" css={css`
                    text-decoration: underline;
                    color: #111111;
                       font-weight: 400;
                `}>Shop Now</a></p>
                </div>

            </header>

        </>
    )
}