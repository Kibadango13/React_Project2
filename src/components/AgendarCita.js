import React ,{Component,Fragment} from 'react';
import uuid from 'uuid';
import Error from './Error';

const initialState ={
    nombreCliente:'',
    hora :'',
    fecha:'',
    temas:'',
    error : false,
    id: ''
}

class  AgendarCita extends Component{

    state ={...initialState}

    constructor(props){
        super(props);
      }
    

    render(){


        const {guardarCita} =this.props;
        const  guardarInfo =(e)=>{
            this.setState({...this.state,
                [e.target.name]:e.target.value}
                );
        }



        const guardarFormulario = (e)=>{
            e.preventDefault();
            const {
                nombreCliente,
                hora,
                fecha,
                temas
            } = this.state;

        if(nombreCliente ==='' || hora ==='' || fecha ==='' ||temas ==='' ){
                    this.setState({...this.state,error:true});
                    return;
        }


            const stateActual = {...this.state,id:uuid()}
            guardarCita(stateActual);
            this.setState(initialState);
        }
        return (
            <Fragment>
                    <form className ='form-group'   
                    onSubmit={guardarFormulario}>
                        {
                            this.state.error? 
                            <Error mensaje ='Todos los campos son necesarios'/>:null 
                        }
                        <div className  ='form-group'>
                            <label htmlFor='nombreCliente'>Nombre de cliente</label>
                            <input className='form-control' 
                            type='text' 
                            name='nombreCliente' 
                            onChange={guardarInfo}
                            value={this.state.nombreCliente}
                            />
                        </div>

                        <div className  ='form-group'>
                            <label htmlFor ='hora'>Hora</label>
                            <input className='form-control' 
                            type='time' 
                            name='hora' 
                            onChange={guardarInfo}
                            value={this.state.hora}
                            />
                        </div>

                        <div className  ='form-group'>
                            <label htmlFor ='fecha'>fecha</label>
                            <input className='form-control' 
                            type='date' 
                            name='fecha' 
                            onChange={guardarInfo}
                            value={this.state.fecha}/>
                        </div>

                        <div className  ='form-group'>
                            <label htmlFor ='temas'>Temas a descrubir</label>
                            <input className='form-control'
                            name='temas' 
                            onChange={guardarInfo}
                            value={this.state.temas}/>
                        </div>
                            <button className ='btn btn-primary'>Enviar</button>
                    </form>


                    
            </Fragment>
           
        );
    }
}


export default AgendarCita ;

