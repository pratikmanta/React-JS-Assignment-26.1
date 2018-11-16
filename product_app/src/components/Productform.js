import React , {Component} from 'react';
import Productdetail from './Productdetail';

// form component to enter product details
const initialState = {
    productArray:[],
    id:'',          
    name:'',
    description:'',
    price:'',
    isChecked:false,
    isAvailable:'No',
}
class Productform extends Component {
    constructor(props){
        super(props)
        this.productID = 0;
        this.state = initialState ;
    }    

    onNameChange = (event) => {
        this.setState({name:event.target.value})
    }
    
    onDescriptionChange = (event) => {
        this.setState({description:event.target.value})
    }

    onPriceChange = (event) => {
        this.setState({price:event.target.value})
    }
    
    onCheck = () => {
       this.setState({isChecked: !this.state.isChecked}, ()=> {
        if(this.state.isChecked) {
            this.setState({isAvailable:'Yes'})           
        } else
            this.setState({isAvailable:'No'})   
        })
    }

    // pushing inside array on button submit using unshift method
    onSubmit = () => {
        if(!this.state.name || !this.state.description || !this.state.price){
            return this.setState({name:''}, ()=> {
                this.setState({price:''} , () => {
                    this.setState({description:''})
                })
            })
        }
        this.setState(initialState)
        this.productID += 1;
        const newProductArray = Object.assign([],this.state.productArray)
        newProductArray.unshift({
        id:this.productID,
        name:this.state.name,
        description:this.state.description,
        price:this.state.price,
        isAvailable:this.state.isAvailable   
    })
    this.setState({productArray:newProductArray}) 
        
    }
    // form for entering product details
    render() {
    
    // Uncomment below code to check error boundary and reload 
    //     if(true){
    //     throw new Error('Error')
    // }  
        return (
        <div className='container'>
            <h2>Products</h2>
            <div className='p-2 bg-light'>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="well well-sm">
                            <div id="product-form" className="form-group">
                                <label className="col-md-3 control-label" htmlFor="name">Name</label>
                                <div className="col-md-9">
                                    <input id="name" name="name" value={this.state.name} type="text" className="form-control" onChange= {this.onNameChange}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="description">Description</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" id="description" name="description" value={this.state.description} rows="5" onChange= {this.onDescriptionChange}></textarea>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="price">Price</label>
                                <div className="col-md-9">
                                    <input id="price" name="price" type="text" value={this.state.price} className="form-control" onChange= {this.onPriceChange} />
                                </div>                                   
                            </div>

                            <div className="form-check mb-3 ml-2">
                                <input className="form-check-input" type="checkbox" checked={this.state.isChecked} id="check" onChange= {this.onCheck}/>
                                <label className="form-check-label" htmlFor="check">Available</label>
                            </div>

                            <div className="form-group">
                                <div className="col-md-12">
                                    <button className="btn btn-primary btn-lg" onClick={this.onSubmit }>Save</button>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <br></br> 
            <div className="container">
                {   
                    
                    this.state.productArray.map((product) => {   
                    return (
                            <Productdetail key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} isAvailable={product.isAvailable} msg={this.state.msg}/>
                        )    
                    }) 
                }
            </div>
        </div>
        )
    }
}

export default Productform;