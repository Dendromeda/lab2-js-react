import React, {Component} from 'react'

export default class TextField extends Component{
    
    // Konstruktorn var inte nödvändig
    // Vi kan använda props rakt av

    updateListener = (event) =>{
        this.props.listenerFunc(event.target.value);
    }

    render(){
        return (             
                <input
                  type="text"
                  className="form-control"
                  id={this.props.id}
                  aria-describedby={this.id}
                  rows="3"
                  data-gramm="true"
                  data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
                  data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
                  data-gramm_editor="true"
                  placeholder={this.props.placeholder}
                  text={this.props.default}
                  onChange={this.updateListener}
                  defaultValue={this.props.default}
                />
        )
    }

}
