import axios from 'axios';

export default axios.create({
	baseURL:'https://api.rawg.io/api',
	params:{
		key:'fa6dc5eaee064890a68674c9f5addd14'
	}
})