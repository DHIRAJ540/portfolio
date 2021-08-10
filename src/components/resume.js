import React from 'react';
import resume from '../img/resume.pdf'
import styled from 'styled-components';

const Resume = () => {
    return (
        <StyledResume>
            <Container>
                <h1>Resume</h1>
                <iframe src={resume} width="100%" height="1200px"></iframe>
            </Container>
        </StyledResume>
    )
}

export default Resume;

const StyledResume = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        color: #66fcf1;
        font-size: 3rem;
        font-weight: bold;
        margin-top: 7rem;
    }
`

const Container = styled.div`
    width: 80%;
    max-width: 1220px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`