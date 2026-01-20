'use client';

import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from '@/data/config/site.settings';

export const AnalyticsWrapper = () => {
    return <Analytics />;
};
