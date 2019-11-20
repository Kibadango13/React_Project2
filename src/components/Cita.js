import React ,{Component,Fragment} from 'react';


class Cita extends Component{

    constructor(props){
        super(props);
      }
    

    render(){
const {cita, eliminarCita} = this.props;

        return (
         
                    <div  className ='card m-3 p-3'>

                        <div className = 'card-body'>
                              <p>Nombre cliente : <span>{cita.nombreCliente} </span></p>
        
                              <p>Fecha y Hora: <span>{cita.fecha} - {cita.hora} </span></p>
                              <p>Motivo: <span>{cita.temas} </span></p>
                        </div>
                        <div className = 'card-footer'>
                        <button onClick={ ()=>{ eliminarCita(cita.id)}} className ='btn btn-danger'  > Eliminar</button>
                    </div>
                    </div>

                   

          
           
        );
    }
}


export default Cita ;

