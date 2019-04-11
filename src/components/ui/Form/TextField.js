import React, {Component} from 'react'

export default class TextField extends Component{

    constructor(props){
        super(props);
        let defVal = ""
        let placeHldr = ""
        if (props.default){
            defVal = props.default;
        }
        if (props.placeholder){
            defVal = props.placeholder;
        }
        this.state = {default: defVal, placeholder: placeHldr}
    }
    
    
    updateListener = (event) =>{
        this.props.listenerFunc(event.target.value);
    }

    render(props){
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
                  placeholder={this.state.placeHldr}
                  text={this.state.default}
                  onChange={this.updateListener}
                />
        )
    }

}
