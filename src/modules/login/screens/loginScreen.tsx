import { useState } from 'react';

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
    const [username, setUserName] = useState('');
    const [senha, setSenha] = useState('');

    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    };

    const handleSubmit = () => {
        alert(`User: ${username}, Senha: ${senha}`);
    };

    return (
        <>
            <Container>
                <Containerlogin>
                    <LimitedContaiver>
                        <LogoImage src="./logo.jpg" />
                        <TitleLogin type="secondary">Login</TitleLogin>
                        <Input
                            title="Usuário"
                            margin="32px 0px 0px"
                            onChange={handleUserName}
                            value={username}
                        />
                        <Input
                            type="password"
                            title="Senha"
                            margin="32px 0px 0px"
                            onChange={handleSenha}
                            value={senha}
                        />
                        <Button type="primary" margin="64px 0px 16px 0px" onClick={handleSubmit}>
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
