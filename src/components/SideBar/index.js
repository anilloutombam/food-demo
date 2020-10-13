import React, { useState } from 'react';

import { Container } from '@material-ui/core'
import styled from 'styled-components';
import Filter from '../Filter';


const CustomSideWrapper = styled(Container)`
&&{
    flex: 0 0 22%;
    max-width: 22%
}

`

const SideBar = () => {
    return (
        <CustomSideWrapper>
            <Filter/>
        </CustomSideWrapper>
    )
}

export default SideBar;