// lib/gtag.js
export const GA_MEASUREMENT_ID = 'G-BSNWZCYXYV';

export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};

