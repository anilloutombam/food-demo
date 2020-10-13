import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components'
import SideBar from '../../components/SideBar';
import RightBar from '../../components/RIghtBar';


const CustomWrapper = styled(Container)`
&&{margin-top: 2rem;
display: flex;
}
`;



const AppBottom = () => {
    return (
        <CustomWrapper>
            <SideBar />
            <RightBar />
        
        
        </CustomWrapper>
    )
}

export default AppBottom;