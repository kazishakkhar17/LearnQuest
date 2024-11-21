const Caret = ({ direction }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={direction === 'asc' ? 'rotate-180' : ''} width="10" height="10">
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.9 18.7 30.6 18.7h256c13.8 0 26.2-7.4 32.6-18.7s2.4-25.7-6.9-34.9l-128-128z" />
        </svg>
    );
};

export default Caret;
