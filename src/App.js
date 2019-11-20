import React ,{Component,Fragment} from 'react';
import Header from './components/Header'
import AgendarCita from './components/AgendarCita'
import ListaCitas from './components/ListaCitas'
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
  }

    state ={
      citas:[]
    }

render(){
  const guardarCita=(cita)=>{



    this.setState({citas:[...this.state.citas,cita]});
    console.log('guardarCita');
    console.log(this.state);
    console.log('end');
  }

const eliminarCita=(id)=>{

    let stateActualizado = this.state.citas.filter(
      cita => (cita.id!==id)
    );

    this.setState({citas:stateActualizado});
    console.log(id);
}





  return(
    <Fragment>
        <Header />
       
        <div className = 'container'>
              <div className = 'row'>
                  <div className ='col-6'>
                      <div className ='text-center'>
                      <AgendarCita  guardarCita = {guardarCita}/>
                      </div> 
                  </div>
                  <div className ='col-6'>
                      <div className ='text-center'>
                      <ListaCitas citas ={this.state.citas}   eliminarCita = {eliminarCita} />
                      </div> 
                  </div>
              </div>

        </div>
       </Fragment>
  );
}

}


export default App;
