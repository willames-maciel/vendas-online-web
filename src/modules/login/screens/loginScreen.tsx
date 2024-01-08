import {
    BackgroudImage,
    Container,
    Containerlogin,
    LimitedContaiver,
    LogoImage,
} from '../styles/loginScreeen.styles';

const loginScreen = () => {
    return (
        <>
            <Container>
                <Containerlogin>
                    <LimitedContaiver>
                        <LogoImage src="./logo.jpg" />
                    </LimitedContaiver>
                </Containerlogin>
                <BackgroudImage src="./background.png" />
            </Container>
        </>
    );
};

export default loginScreen;
