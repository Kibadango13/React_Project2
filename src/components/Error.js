import React ,{Component,Fragment} from 'react';


class Error extends Component{

    constructor(props){
        super(props);
      }
    

    render(){
        return (
            <Fragment>
                       <header className ='alert alert-danger'>
                           {this.props.mensaje}
                       </header>
            </Fragment>
           
        );
    }
}


export default Error ;

