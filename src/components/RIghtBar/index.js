import React, { useState } from 'react';
import { Container } from '@material-ui/core'

import styled from 'styled-components';
import Results from '../Results';


const CustomSideWrapper = styled(Container)`
&&{
    flex: 0 0 78%;
    max-width: 78%
}

`
const RightBar = () => {
    return (
        <CustomSideWrapper>
            <Results />
        </CustomSideWrapper>
    )
}

export default RightBar;