
//
import React from 'react'

//
import { styled, css } from 'styled-components'

//
import { before, after } from '../mixins/pseudo'
import { relative } from '../mixins/position'

//
import { useTranslation } from 'react-i18next'

//
const Wrapper = styled.div`

    //
    height: 100vh;

    //
    display: flex;
    flex-direction: column;

    //
    user-select: none;

    //
    background-color: var(--colour-pokedex-red);

`

//
const Header = styled.header`

    //
    position: relative;

    //
    z-index: 10;

    //
    background-color: var(--colour-pokedex-light-red);

    //
    height: 1em;

    //
    ${before({}, () => css`
        border-top: 2.9em solid var(--colour-pokedex-light-red);
        border-right: 2em solid transparent;
        height: 0;
        width: 8.5em;
    `)}

    //
    svg {

        //
        pointer-events: none;

        //
        ${relative({ 'insetBlockStart' : '0.2em', 'insetInlineStart': '0.5em' })}

        //
        transform-origin: top left;
        transform: scale(0.5);

    }

    //make everything bigger on large screens
    @media only screen and (min-width: 600px) {

        //
        height: 3.5em;

        //
        svg { transform: scale(1.0); }

        //
        ${before({}, () => css`
            border-top-width: 5.5em;
            border-right-width: 4em;
            width: 16em;
        `)}

    }

`

//style the main "screen" area
const Screen = styled.main`

    //
    position: relative;

    //
    margin: 1em;

    //
    padding-block-start: 1.5em;
    padding-inline: 1em;

    //
    border-radius: 1em;
    @media only screen and (min-width: 600px) {
        border-end-start-radius: 3em;
    }

    //
    overflow: hidden;

    //
    background-color: var(--colour-background);

    //
    flex: 0 1 100%;

    //add a shine effect over the screen
    ${after({ 'inset': '0px' }, () => css`

        //make sure the layer is transparent to any mouse stuff
        pointer-events: none;

        //create a gradient for the bands of the shine
        --shine-colour: rgb(from var(--colour-foreground) r g b / 3%);
        background: linear-gradient(120deg, transparent 0%, ${[[25, 10], [65, 4], [75, 10]].map((v) => { const b = v[0] - (v[1] / 2), e = v[0] + (v[1] / 2), f = 1; return css` transparent ${b-f}%, var(--shine-colour) ${b}%, var(--shine-colour) ${e}%,transparent ${e+f}%, `})} transparent 100%);

    `)}

`

//style the main "footer" area
const Footer = styled.footer`

    //
    padding: 0em 5em;

    //
    font-size: 0.8em;
    font-weight: 300;
    text-align: right;

    //
    h1 {
        margin: 0.1em 0em 0.5em;
        opacity: 0.9;
        color: var(--colour-foreground);
    }

`

//
export default (props) => {

    //
    const { t } = useTranslation()

    //
    return (
        <Wrapper draggable={false}>

            <Header>
                <svg>
                    <circle style={{ 'fill' : "#6894cc", 'stroke' : "#ffffff", 'strokeWidth' : "8px" }} cx="40"  cy="40" r="28" />
                    <circle style={{ 'fill' : "#f94848", 'stroke' : "#333333", 'strokeWidth' : "3px" }} cx="100" cy="25" r="12" />
                    <circle style={{ 'fill' : "#fcab1d", 'stroke' : "#333333", 'strokeWidth' : "3px" }} cx="135" cy="25" r="12" />
                    <circle style={{ 'fill' : "#87c13a", 'stroke' : "#333333", 'strokeWidth' : "3px" }} cx="170" cy="25" r="12" />
                </svg>
            </Header>

            <Screen className={props.className}>
                {props.children}
            </Screen>

            <Footer>
                <h1>{t('dexxie')}</h1>
            </Footer>

        </Wrapper>
    )

}