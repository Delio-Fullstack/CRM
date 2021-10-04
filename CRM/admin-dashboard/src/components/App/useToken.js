import React, {useState} from 'react';

const useToken = () => {
    const [token, setToken ] = useState();
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token')
    }

}

export default useToken;