import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {

    const navigate = useNavigate();
    // set document title
    useEffect(() => {
        document.title = 'Home Page';
        navigate('/login')
    }, []);

    return (
        <div>home</div>
    )
}

export default Home;