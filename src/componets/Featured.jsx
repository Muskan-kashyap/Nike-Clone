import { css } from "@emotion/react";

const featuredImg = [
    {title: "/featured/f1.avif"},
    {title: "/featured/f2.avif"},
    {title: "/featured/f3.avif"},
    {title: "/featured/f4.avif"},
]

export const Featured = () => {
    return (
        <section
            css={css`
        padding: 80px 0;
      `}
        >
            <h3
                css={css`
          padding: 0 48px;
        `}
            >
                Featured
            </h3>

            <div
                css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 24px 0px;
          max-width: 100%;
          overflow: hidden;
        `}
            >

                {
                    featuredImg.map((item, idx)=>(
                        <>
                            <a
                                key={idx}
                                href="#"
                                css={css`
                          display: block;
                          width: 100%;
                          height: 100vh;
                          overflow: hidden;
            `}
                            >
                                <img
                                    src={item.title}
                                    css={css`
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                display: block;
                              `}
                                />
                            </a>
                        </>
                    ))
                }

            </div>
        </section>
    );
};