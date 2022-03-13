const axios = require('axios')


class UsersController {

	async getUsers(req, res) {
		try {
			const data = await axios.get('http://localhost:7000/users')
			const users = await data.data

			const annaUser = 'anna@mail'

			const checkUser = (users = [], email) => {
				let flag = 0

				if(users.length > 0) {
					users.map(m => {
						if(m.email === email) {
							flag = 1
						}
					})
				}

				if(flag === 1) {
					return false 
				} else {
					return true 
				}
					
			}

			checkUser(users, annaUser)
				? res.json({users, message: 'Всё отлично!'})
				: res.json('Такой email уже существует.Попробуйте другой')

		} catch(err) {
			console.log(err)
		}
	}

}

module.exports = new UsersController()