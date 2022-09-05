import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import "./HomePage.scss"
export default function HomePage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>NFT Adventure Game</title>
            </Helmet>

            <div className="bg-h">
                <div className="homepage">
                    <div className="borders">
                        <div className="hp-top">
                            <h1>NFTAdventure</h1>
                            <h3>Play2Earn NFT Game on phantom</h3>
                        </div>
                        <div className="hp-navigation">
                            <Link className="hp-nav mint" to="/minting">MINTING</Link>
                            <span className="hp-nav stacking">EXPLORATION (STACKING)</span>
                        </div>
                        <div className="hp-links">
                            <a className="hp-link" href="https://twitter.com/" target="_blank" rel="noreferrer" ><img className="link-img" src="/assets/twitter.png" alt="Twitter"/></a>
                            <a className="hp-link" href="https://discord.com/" target="_blank" rel="noreferrer" ><img className="link-img" src="/assets/discord.png" alt="Discord"/></a>
                        </div>
                        <div className="hp-footer">
                            <Link className="hp-whitepaper" to="/whitepaper">
                                <img className="footer-img" src="/assets/whitepaper.png" alt="Whitepaper"/>
                                <span className="footer-text">WHITEPAPER</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
