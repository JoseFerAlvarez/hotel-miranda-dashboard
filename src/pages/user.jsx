import React from 'react';
import { useParams } from 'react-router';

const User = () => {
    let params = useParams();
    return (
        <div>
            <h1>user nº{params.iduser}</h1>
        </div>
    );
}

export default User;
