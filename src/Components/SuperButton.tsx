import React from 'react';

type SuperButtonType = {
    children: React.ReactNode
    changeCount: () => void
    disabled?: boolean
}
export const SuperButton: React.FC<SuperButtonType> = ({children, changeCount, disabled}) => {

    const onClickHandler = () => {
        changeCount()
    }

    return (
        <div>
            <button onClick={onClickHandler} disabled={disabled}>{children}</button>
        </div>
    );
};

