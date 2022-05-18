import { useEffect } from 'react';
import { navigate } from 'gatsby';

const Index = () => {
    useEffect(() => {
        navigate('/home');
    }, []);

    return null;
};

export default Index;
