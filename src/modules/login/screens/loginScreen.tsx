import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import { useGlobalContext } from '../../../shared/components/hooks/useGlobalContext';
import { useRequests } from '../../../shared/components/hooks/useRequests';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/Input';
import {
    BackgroudImage,
    Container,
    Containerlogin,
    LimitedContaiver,
    TitleLogin,
} from '../styles/loginScreeen.styles';
import { UserType } from '../types/UserType';

const LoginScreen = () => {
    const { accessToken, setAccessToken } = useGlobalContext();
    const { postRequest, loading } = useRequests();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    };

    const handleSubmit = async () => {
        const uer = await postRequest<UserType>('http://localhost:8080/auth', {
            email: email,
            password: senha,
        });
        setAccessToken(uer?.accessToken || '');
    };

    return (
        <>
            <Container>
                <Containerlogin>
                    <LimitedContaiver>
                        <SVGLogo />
                        <TitleLogin type="secondary">Login ({accessToken})</TitleLogin>
                        <Input
                            title="E-mail"
                            margin="32px 0px 0px"
                            onChange={handleEmail}
                            value={email}
                        />
                        <Input
                            type="password"
                            title="Senha"
                            margin="32px 0px 0px"
                            onChange={handleSenha}
                            value={senha}
                        />
                        <Button
                            loading={loading}
                            type="primary"
                            margin="64px 0px 16px 0px"
                            onClick={handleSubmit}
                        >
                            ENTRAR
                        </Button>
                    </LimitedContaiver>
                </Containerlogin>
                <BackgroudImage src="./background.png" />
            </Container>
        </>
    );
};

export default LoginScreen;
