import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
                <p className='text-base-100 bg-secondary px-3 py-2'>latest</p>
                <Marquee className='text-2xl font-medium ' pauseOnHover={true} speed={100}>
                  The July Revolution,[a] also known as the July Mass Uprising[b] or the Student-People's Uprising,[c] was a pro-democracy mass uprising in Bangladesh in 2024.[d] It began as a quota reform movement in early June 2024, led by the Students Against Discrimination, after the Bangladesh Supreme Court invalidated the government's 2018 circular regarding job quotas in the public sector. Coinciding with the first anniversary of the resignation of Sheikh Hasina, on 5 August 2025, the revolution received constitutional acknowledgment with the announcement of the July Declaration. 
                </Marquee>

        </div>
    );
};

export default LatestNews;