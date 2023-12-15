import React from 'react';
import { Container } from './Widgets.styled';
import ThemeControl from '../../blocks/ThemeControl/ThemeControl';
import { Theme } from '@/interfaces';

interface WidgetsProps {
    theme: Theme;
    toggleTheme: () => void;
}

const Widgets: React.FC<WidgetsProps> = ({ theme, toggleTheme }) => {
    return (
        <Container>
            <ThemeControl color={theme.color} title={theme.title} toggleTheme={toggleTheme} />
        </Container>
    );
};

export default Widgets;
