import React, { Fragment } from 'react';

// product detail component using react fragment to display products
const Productdetail = ({ id, name, description, price, isAvailable}) => {
    return (
        <Fragment>
            <section className='text-dark mt-2'>
                <div className="card border-rounded">
                    <div className="card-header bg-primary text-light">
                        <h4>{id}. {name.toUpperCase()}</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-primary">{description}</h5>
                        <hr/>
                        Available?
                        { (isAvailable === 'Yes')
                            ?<p className="p-1 m-1 text-light card-text bg-success d-inline">{isAvailable} </p>
                            :<p className="p-1 m-1 text-light card-text bg-danger d-inline">{isAvailable} </p>
                        }
                        <hr/>
                        <p className="card-text">Price: <i className="fa fa-inr" aria-hidden="true"></i> {price}</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )   
}


export default Productdetail;