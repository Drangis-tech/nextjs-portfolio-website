// EmailInput.tsx
import React from 'react';

const EmailInput: React.FC = () => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email">El. paštas</label><br />
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Įveskite savo el. paštą"
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
        </div>
    );
}

export default EmailInput;