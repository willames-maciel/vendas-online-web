import axios from 'axios';
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
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    };

    const handleSubmit = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/auth',
            data: {
                email: email,
                password: senha,
            },
        })
            .then((result) => {
                alert(`Fez Login: ${result.data.accessToken}`);
                return result.data;
            })
            .catch(() => {
                alert('Usuário e senha inválido');
            });
    };

    return (
        <>
            <Container>
                <Containerlogin>
                    <LimitedContaiver>
                        <LogoImage src="./logo.jpg" />
                        <TitleLogin type="secondary">Login</TitleLogin>
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
