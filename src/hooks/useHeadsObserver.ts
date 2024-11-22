import { useEffect, useState, useRef } from 'react';

export function useHeadsObserver() {
    const observer = useRef<IntersectionObserver | null>(null);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleObserver = (entries: any[]) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            });
        }

        observer.current = new IntersectionObserver(handleObserver, { rootMargin: "0px 0px -80% 0px" });

        const elements = document.querySelectorAll("h2, h3");
        elements.forEach((elem) => observer.current?.observe(elem));
        return () => observer.current?.disconnect();
    }, [])

    return { activeId };
}