import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import Layout from '@/components/common/Layout/Layout';
import { BasePageProps, Card } from '@/interfaces';
import useTranslation from '@/hooks/useTranslation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cards from '../../../public/locales/ru/cardsSml.json';
import SliderWithWidget from '@/components/sections/SliderWithWidget/SliderWithWidget';

interface PageNewsProps extends BasePageProps {}

const Index: React.FC<PageNewsProps & InferGetStaticPropsType<typeof getStaticProps>> = ({ meta, toggleTheme }) => {
    const { t } = useTranslation('cardsSml');
    const cards = t('cardsSml.items', { returnObjects: true }) as Array<Card>;
    let prop: Card[] = [];
    cards.filter((card) => {
        card.title === meta.title ? prop.push(card) : '';
    });

    const content = {
        title: `Детальная страница проекта: ${meta.title}`,
        slider: {
            items: prop
        },
        theme: {
            title: 'Переключение темы',
            color: {
                light: 'Светлая',
                dark: 'Тёмная'
            }
        }
    };

    return (
        <Layout meta={meta} header={{}} sandwich={{}}>
            <SliderWithWidget content={content} toggleTheme={toggleTheme} />
        </Layout>
    );
};
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = cards.cardsSml.items.map((card: { title: string }) => ({
        params: { id: card.title }
    }));

    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params, locale = 'ru' }) => {
    return {
        props: {
            meta: {
                title: params?.id || '',
                description: '',
                keywords: ''
            },

            ...(await serverSideTranslations(locale, ['common', 'SliderWithWidget', 'cardsSml']))
        },
        revalidate: 1
    };
};

export default Index;
