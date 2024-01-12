import React from 'react'

const  Header = () => {
    
    return (
        <div >
            <nav style={{backgroundColor:"lightgrey"}}  class="navbar navbar-expand-lg bg-body-tertiary">
            <a style={{background:"lightgrey"}}  class="navbar-brand" href="navbar">Toursit Palces </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div style={{backgroundColor:"lightgrey"}} class="container-fluid">
                    <div  class="collapse navbar-collapse justify-content-end
                    
                    " id="navbarNav">
                        <ul style={{backgroundColor:"lightgray"}} class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/feature">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pricing">Pricing</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
