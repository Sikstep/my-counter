import React from 'react';

type SuperButtonType = {
    children: React.ReactNode
    changeCount?: () => void
    disabled?: boolean
}
export const SuperButton: React.FC<SuperButtonType> = ({children, changeCount, disabled}) => {

    const onClickHandler = () => {
        if (changeCount) {
            changeCount()
        }
    }

    return (
        <>
            <button onClick={onClickHandler} disabled={disabled}>{children}</button>
        </>
    );
};

