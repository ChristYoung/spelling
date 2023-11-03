// https://codepen.io/ziafatali/pen/mxVwpq
export interface LoadingLineProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const LoadingLine: React.FC<LoadingLineProps> = (
    props: LoadingLineProps,
) => {
    console.log('props', props);
    return <div className="__LoadingLine relative"></div>;
};
