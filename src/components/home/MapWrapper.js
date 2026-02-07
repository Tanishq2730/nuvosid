"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/About/map/map"), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-neutral-900/10 animate-pulse rounded-lg" />,
});

export default function MapWrapper() {
    return <Map />;
}
