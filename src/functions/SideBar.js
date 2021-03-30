import React from 'react'

const SideBar = () => {
    
    const sidenavOpen = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            return elems
        })
    }  

    return (
        <div>
            <ul id="navbarNav" class="sidenav">
                <li>
                    <div class="user-view">
                        <div class="background">
                            <img src="images/office.jpg"/>
                        </div>
                        <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
                        <a href="#name"><span class="white-text name">John Doe</span></a>
                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div class="divider"></div></li>
                <li><a class="subheader">Subheader</a></li>
                <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <button className="navbar-toggler sidenav-trigger" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={sidenavOpen}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    )
}

export default SideBar
