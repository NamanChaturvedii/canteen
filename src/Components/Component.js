import React from 'react'

import "../App.css"




const Component = (props) => {
    return (
        <>


            <div className='box'>
                <div className='component '>
                    <div className="card m-2 " style={{ width: "18rem" }}>
                        <img
                            src={props.photo}
                            className="card-img-top"
                            alt="photo"
                        />
                        <div className="card-body">
                            <h5 className="card-title fs-3">{props.name}</h5>
                            <p className="card-text fs-4">{props.mrp}</p>
                            <button className='btn btn-primary ms-1'>More Details</button>
                            <button className='btn btn-secondary ms-1'
                            >Add To Cart</button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Component