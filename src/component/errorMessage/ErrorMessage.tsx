import React from 'react'
import styles from './error-message.module.css'
import { useRouter } from "next/navigation";


interface ErrorMessageProps {
    message: string,
    from?: string
}
  
const ErrorMessage: React.FC<ErrorMessageProps> = ({
        message, 
    }) => {
    const router = useRouter();


    return (
        <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{message}.</p>
        <button
            className={styles.goBack}
            onClick={() => router.back()}
        >
            Go back
        </button>
        </div>
    );
};

export default ErrorMessage;