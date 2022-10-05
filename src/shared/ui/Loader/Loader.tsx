import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
    </div>
);
