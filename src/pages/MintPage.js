import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import "./MintPage.scss"

export default function MintPage() {
    const [wantmint, setWantmint] = useState(1);
    const [minted, setMinted] = useState(Math.floor(Math.random() * 2500));
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        update();
    }, [])

    function update()
    {
        let tmp;

        tmp = (minted / 2500) * 100;
        if (minted < 2300)
            setPercent(tmp) 
        else
            setPercent(88)
    }

    function upWanted()
    {
        if (wantmint < 99)
        {
            setWantmint(wantmint + 1);
        }
    }
    function downWanted()
    {
        if (wantmint > 1)
        {
            setWantmint(wantmint - 1);
        }
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>NFT Adventure Game - Minting</title>
            </Helmet>
            <div className="mintpage">
                <div className="borders">
                    <div className="mint-top">
                        <Link to="/" className="mint-button-d">
                            <button>← BACK TO MENU</button>
                        </Link>
                        <h1>Minting</h1>
                        <div className="mint-button-d">
                            <button className="top" onClick={update}><img src="assets/metamask.svg" alt=""></img> CONNECT WALLET</button>
                        </div>
                    </div>
                    <div className="progress">
                        <img src="assets/ship.png" className="ship" style={{marginLeft: percent + "%"}} alt="SHIP"></img>
                    </div>
                    <p className="minted">{minted}/2500 MINTED</p>
                    <div className="mint-button-d">
                            <button className="yellow" onClick={update}><img src="assets/metamask.svg" alt=""></img> CONNECT WALLET</button>
                    </div>
                    <div className="buy">
                        <div className="number-mint">
                            <div className="flex">
                                <span>{wantmint}</span>
                                <div>
                                    <button className="selectnum" onClick={upWanted}>+</button>
                                    <button className="selectnum" onClick={downWanted}>-</button>
                                </div>
                            </div>
                            <button className="mint">MINT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
