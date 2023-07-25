import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../Components/Menu'


const Home = () => {
    return (

        <>
        <div className='fw-medium text-center fs-2 my-2 fst-italic' style={{ color: 'white' }} >
            Hello!! VIT Students.
            <br /> Welcome to Mayuri
        </div>
        <div className="text-center fs-5 fst-italic" style={{ color: 'white' }}>
            If you want to be free from your suffering, make up your mind. If you give up on your dream, you will suffer more. -Might Guy
        </div>
        <div className="button_1">
            <NavLink to='/menu'>
                <button className='button-89 fw-medium '> Go To Menu</button>
            </NavLink>
        </div>
    </>
    )
}

export default Home