import React from 'react';
import { CardImage, Container, Description, DescriptionCard, DescriptionWrapper, TextCardWrapper, TitleCard } from './Card.styled';
import CopyButton from '../CopyButton/CopyButton';
import Link from 'next/link';

export interface cardsProps {
    title: string;
    date: string;
    place: string;
    description?: string;
    image?: string;
    href?: string;
    bigCard?: boolean;
}

const Card: React.FC<cardsProps> = ({ title, date, place, image, description, href, bigCard }) => {
    const inner = (
        <Container>
            <div>
                <CopyButton value={href ?? `${title} ${date} ${place}`} />
                {image && <CardImage src={image} alt="" />}
            </div>

            <TextCardWrapper>
                <TitleCard dangerouslySetInnerHTML={{ __html: title }} />
                {description && <DescriptionCard>{description}</DescriptionCard>}
                <DescriptionWrapper>{date}</DescriptionWrapper>
            </TextCardWrapper>
        </Container>
    );
    return !bigCard ? (
        <Link passHref href={`/projects/${title}`} legacyBehavior={false}>
            {inner}
        </Link>
    ) : (
        <>
            {inner}
            {bigCard && <Description> {place}</Description>}
        </>
    );
};

export default Card;
