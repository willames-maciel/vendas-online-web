import { ButtonProps } from 'antd';

import { ButtonAntd } from './button.styles';

interface ButtonCurrrentProps extends ButtonProps {
    margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrrentProps) => {
    return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;
