import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const Containerlogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    padding: 22px;
`;

export const LogoImage = styled.img``;

export const BackgroudImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LimitedContaiver = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 498px;
`;
