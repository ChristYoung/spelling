import { SpellCard } from '../components/SpellCard';

export const SpellWords: React.FC = () => {
    return (
        <div className="__SpellWords">
            <SpellCard
                word="age"
                familiar={false}></SpellCard>
        </div>
    );
};
