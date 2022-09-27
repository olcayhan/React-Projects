import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Wordlette</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/words">Words <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/learn">Learn</a>
                    <a className="nav-item nav-link" href="/test">Test</a>
                </div>
            </div>
        </nav>
    )
}
