import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api'


export default function Logon(){
const [id,seId] = useState('');
const history = useHistory();

 async function handleLogin(e){

 	e.preventDefault();

	try {

		const reponse = await api.post('sessions',{ id } );
		localStorage.setItem('ogn_id',id);
		localStorage.setItem('ognName',		reponse.data.name);
		history.push('/profile')

	} catch (error) {
		alert('Falha no login tente novamente');
	}
}

	return(
	  <div className="logon-container">
		  <section className="form">
				<img src={logoImg} alt="Be The Hero"></img>
					<form  onSubmit={handleLogin}>
						<h1>Faça seu logon</h1>
						<input 
							placeholder="Sua ID" 
							value={id} 
							onChange={e => seId(e.target.value)} />
						<button className="button" type="submit">Entrar</button>
							<Link className="back-link" to="/register">
							  	<FiLogIn size={16} color="#E02041"/>
									Não tenho cadastro
							</Link>
					</form>
		  </section>
		 	 <img src={herosImg} alt="herois"></img>
	  </div>
	)
} 