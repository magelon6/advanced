import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter/ui/Counter';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
