'use client'
import React, {useRef} from 'react';
import Script from "next/script";

declare global {
    interface Window {
        google: Google;
    }
}

interface GoogleSignInButtonProps {
    onSuccess?: (response: { credential: string }) => void;
    // onError?: (error: Error) => void;
}

const GoogleSignInButton = ({onSuccess}: GoogleSignInButtonProps) => {
    const buttonRef = useRef<HTMLDivElement>(null)

    const handleCredientials = (response: { credential: string; }) => {
        console.log("Encoded JWT ID token: " + response.credential);
        onSuccess?.(response);
    }


    const buttonGenerate = () => {
        console.log('Btn generate')
        window.google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: handleCredientials,
            context: 'signin',
        });

        if (buttonRef.current) {
            window.google.accounts.id.renderButton(buttonRef.current, {
                type: 'standard',
                theme: 'outline',
                shape: 'rectangular',
                size: 'medium',
                text: "signin_with",
                locale: "en"
            });
        }

        window.google.accounts.id.prompt();
    }
    return (
        <div>
            <Script
                src="https://accounts.google.com/gsi/client?hl=en"
                onReady={() => buttonGenerate()}
            />
            <div ref={buttonRef}></div>
        </div>
    );
};

export default GoogleSignInButton;