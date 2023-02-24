import React from 'react';

type SuperButtonType = {
    children: React.ReactNode
    changeCount: () => void
    disabled: boolean
}
export const SuperButton: React.FC<SuperButtonType> = ({children, changeCount, disabled}) => {



    return (
        <div>
            <button onClick={changeCount} disabled={disabled}>{children}</button>
        </div>
    );
};

