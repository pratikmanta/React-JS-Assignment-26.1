import React, { Component } from 'react'

// error boundary component to display error, if any in production
class Errorboundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }
    
    componentDidCatch(error,info) {
        this.setState({hasError:true})
    }

    render() {
      if(this.state.hasError){
          return (
              <h3>Some error has occured</h3>
          )
        }
        return this.props.children
    }
}

export default Errorboundary;