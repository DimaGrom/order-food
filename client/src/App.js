import React, { useState, useEffect } from 'react';
import 'materialize-css';
import axios from 'axios'



const App = () => {

	const [form, setForm] = useState({
		author: '',
		title: ''
	})

	const {author, title} = form

	const handlerUserData = async (e) => {

		e.preventDefault()
		console.log('Функция handlerUserData')

		try {

			await axios.post(
				'http://localhost:5000/users',
				{ ...form }, 
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			).then(res => console.log(res.data))


		} catch(err) {
			console.log('Ошибка клиетской связи --> ', err)
		}

	}


	const handleName = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}
			
	return (
		<div className='container' >
			<h1>Приложение АПП</h1> 

			<form>
		  	<input 
		  			type='text'
		  			value={author}
		  			name="author"
		  			onChange={e => handleName(e)}
		  		/>
		  	<br />
		  	<br />
		  	<input 
		  			type='text'
		  			value={title}
		  			name="title"
		  			onChange={e => handleName(e)}
		  		/>
		  	<br />
		  	<br />
		  	<button onClick={(e) => handlerUserData(e)} >
		  		Пользователь
		  	</button>
		  	<br />
		  	<br />
		  </form> 			

		</div>
	);
}

export default App;