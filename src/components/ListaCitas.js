import React ,{Component,Fragment} from 'react';
import Cita from './Cita'
class  ListaCitas extends Component{


    constructor(props){
        super(props);
      }
    
    render(){
        const {citas,eliminarCita} = this.props;
if(citas.length === 0) return null;


        return (
            <Fragment>
              
              <div className ='row'>
                    {citas.map(cita=>(<Cita key={cita.id}  cita={cita} eliminarCita={eliminarCita}  />))}
              </div>
              </Fragment>
           
        );
    }
}


export default ListaCitas ;

