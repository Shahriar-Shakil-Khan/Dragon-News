import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold mt-5" >Find Us On</h2>

            <div className="className">

                            <div className="join join-vertical w-full my-5">
                <button className="btn join-item btn-outline btn-accent gap-2">
                    <FaFacebookF /> Facebook
                </button>
                <button className="btn join-item btn-outline btn-warning gap-2">
                    <FaTwitter /> Twitter
                </button>
                <button className="btn join-item btn-outline btn-error gap-2">
                    <FaInstagram /> Instagram
                </button>
                </div>

            </div>
           
        </div>
    );
};

export default FindUs;
