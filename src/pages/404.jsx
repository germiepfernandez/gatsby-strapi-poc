import { useEffect } from 'react';
import { navigate } from 'gatsby';

const ErrorPage = () => {
    useEffect(() => {
        navigate('/home');
    }, []);

    return null;
};

export default ErrorPage;
