import axios from "axios"

const settings = {
	withCredentials: false,
	// headers: {
	// 	"content-type": "application/json; charset=utf-8",
	// 	"cache-control": "no-cache",
	// },
}

const instance = axios.create({
	baseURL: "https://randomuser.me/api/",
	...settings,
})

export const usersAPI = {
	getAuthProfile () {
		return instance.get("?inc=name,location,email,registered,dob,phone,picture&seed=Admin")
	},
	getUsers (currentPage) {
		return instance.get(`?page=${currentPage}&results=20&inc=name,location,dob,cell,picture&seed=users`)
	},
}