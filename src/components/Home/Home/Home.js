import { Box } from '@mui/material';
import React from 'react';
import Clients from '../Clients/Clients';
import Collection from '../Collection/Collection';
import DesignWatch from '../DesignWatch/DesignWatch';
import IntroducingWatch from '../IntroducingWatch/IntroducingWatch';
import SliderBanner from '../SliderBanner/SliderBanner';
import Subscription from '../Subscription/Subscription';
import TimePices from '../TimePices/TimePices';

const Home = () => {
    return (
        <>
            <Box sx={{bgcolor:'#262626'}}>
                <SliderBanner></SliderBanner>
                <Collection></Collection>
                <IntroducingWatch></IntroducingWatch>
                <TimePices></TimePices>
                <DesignWatch></DesignWatch>
                <Clients></Clients>
                <Subscription></Subscription>
            </Box>
        </>
    );
};

export default Home;