import React from 'react';
import { SiGithub, SiGoogle } from 'react-icons/si';

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold mb-5">Login With</h2>
            <div>
                <button className="btn btn-outline btn-info w-full my-2"> <SiGoogle /> Login With Google</button>
                <button className="btn btn-outline btn-success w-full"> <SiGithub /> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;