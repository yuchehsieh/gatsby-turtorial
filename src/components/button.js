import styled from 'styled-components';
import React from "react"

const Button = ({ children, className }) => {
 return (
   <button className={className}>
    {children}
   </button>
 )
}

export default styled(Button)`
    background: green;
    color: white;
    font-size: 2rem;
    display: inline-block;
`

/**
 * the original styled-component's code
 * both top and downs' code workable!
 */

// export const Button = styled.button`
//     background: green;
//     color: white;
//     font-size: 2rem;
//     display: 'inline-block;
//  `;
//