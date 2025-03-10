export const trackEvent = (category, action, label) => {
    if (window.gtag) {
        window.gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
};

export const trackPageView = (page) => {
    if (window.gtag) {
        window.gtag('config', 'YOUR_TRACKING_ID', {
            'page_path': page
        });
    }
};
