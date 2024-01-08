import Button from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input/Input';
import {
    BackgroudImage,
    Container,
    Containerlogin,
    LimitedContaiver,
    LogoImage,
    TitleLogin,
} from '../styles/loginScreeen.styles';

const loginScreen = () => {
    return (
        <>
            <Container>
                <Containerlogin>
                    <LimitedContaiver>
                        <LogoImage src="./logo.jpg" />
                        <TitleLogin type="secondary">Login</TitleLogin>
                        <Input title="Usuário" />
                        <Input title="Senha" />
                        <Button type="primary" margin="64px 0px 16px 0px">
                            ENTRAR
                        </Button>
                    </LimitedContaiver>
                </Containerlogin>
                <BackgroudImage src="./background.png" />
            </Container>
        </>
    );
};

export default loginScreen;
