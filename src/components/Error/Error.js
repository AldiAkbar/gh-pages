import StyledError from './index.styled';

function Error(props) {
    const { children } = props;

    return (
        <div>
            <StyledError>{children}</StyledError>
        </div>
    )
}

export default Error;