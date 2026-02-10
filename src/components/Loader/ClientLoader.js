"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./loader.module.scss";

export default function ClientLoader() {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Trigger loader on every path change (including initial load)
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loaderContent}>
                <h1 className={styles.loaderText} data-text="NUVOSID">NUVOSID</h1>
                <div className={styles.loaderBar}>
                    <div className={styles.loaderProgress}></div>
                </div>
            </div>
        </div>
    );
}
