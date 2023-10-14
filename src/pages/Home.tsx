export interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return <div className="__Home">Home component works!</div>;
};
