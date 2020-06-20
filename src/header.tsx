import * as React from 'react';
/**
 * Header aceito
 */
type HeaderProps = {
    text: string
}

/**
 * Título
 * @param props conteúdo
 */
const Header = (props: HeaderProps = { text: 'Hello'}) => {
    return (
        <h1 className='prim-head'>{props.text}</h1>
    )
}

export {Header};