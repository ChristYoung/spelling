export const HornIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>,
) => {
    const { style, className } = props;
    return (
        <svg
            className={className}
            style={{ ...style }}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor">
            <path d="M417.28 164.198c-12.646 0-25.293 5.325-37.683 15.821L169.779 358.35H76.8c-42.342 0-76.8 34.457-76.8 76.8v204.8c0 42.342 34.458 76.8 76.8 76.8h92.98l209.817 178.33c12.339 10.495 25.037 15.82 37.683 15.82a40.755 40.755 0 0034.304-18.534c6.093-9.165 9.216-20.89 9.216-34.816v-640c0-36.864-21.862-53.402-43.52-53.402zM51.2 640V435.2a25.6 25.6 0 0125.6-25.6h76.8v256H76.8A25.6 25.6 0 0151.2 640zm358.4 213.453l-204.8-174.08V395.827l204.8-174.08v631.706z"></path>
        </svg>
    );
};
