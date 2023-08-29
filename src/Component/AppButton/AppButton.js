import { Button } from '@mui/material';
import React from 'react';
import './AppButton.css'

const AppButton = ({ size, color, title, sx, children, fullWidth, disabled, onClick, }) => {

    return (
        <div >
            {fullWidth ?
                <Button disabled={disabled} fullWidth size={size} color={color} sx={sx} className={disabled ? null : 'button'} variant='contained'>{title || children}</Button>
                :
                <Button onClick={onClick} disabled={disabled} size={size} color={color} sx={sx} className={disabled ? null : 'button'} variant='contained'>{title || children}</Button>}

        </div>
    );
};

export default AppButton;