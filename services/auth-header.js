export default function authHeader(use_temp=false) {
    let token = localStorage.getItem('token');
    if(use_temp)
        token = localStorage.getItem('temp_token');
    if (token) {
      	return { Authorization: 'Bearer ' + token };
    } else {
      	return {};
    }
}