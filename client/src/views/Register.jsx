import React from 'react';
import { Link } from '@reach/router';
import LoginForm from '../components/LoginForm';
import RegForm from '../components/RegForm';

const Register = props => {


    return (
        <div>
            <RegForm />
            <h3>Have an account? <Link to="/accounts/login">Login</Link></h3>
        </div>
    )
}

export default Register;
