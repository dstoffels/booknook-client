import axios from 'axios';

async function get(url) {
	try {
		return await axios.get(url);
	} catch (error) {
		const { code, message } = error.response.data.error;
		console.error(`${code}: ${message}`);
	}
}

export default { get };
