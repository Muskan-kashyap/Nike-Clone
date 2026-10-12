import {css} from "@emotion/react"

export const megaMenuStyle = css`
    position: absolute;
    overflow: hidden;
    z-index: 500 !important;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 20px;

    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
    animation: fadeSlide 0.15s ease forwards;

    @keyframes fadeSlide {
        to {
            opacity: 1;
            transform: scaleY(1);
        }
    }
    
    
`;


export const columnStyle = css`
  display: flex;
  flex-direction: column;
    z-index: 500 !important;

  h4 {
    font-weight: 600;
    margin-bottom: 10px;
      font-size: 14px;
      cursor: pointer;
      
  }
    h4:hover {
     color: #707072;
}

  p {
      font-weight: 500;
      font-size: 12px;
      color: #707072;
    margin: 5px 0;
    cursor: pointer;
  }
    p:hover {
        color: #111111
    }
`;