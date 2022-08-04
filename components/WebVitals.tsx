// components > WebVitals

import type { ReportHandler } from 'web-vitals'
import { useEffect } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

// ----------------------------------------
// JSX
// ----------------------------------------

export const WebVitals = () => {
  const sendToGoogleAnalytics: ReportHandler = ({ name, delta, value, id }) => {
    if (window.gtag) {
      window.gtag('event', name, {
        value: delta,
        metric_id: id,
        metric_value: value,
        metric_delta: delta,
      })
    }
  }

  useEffect(() => {
    getCLS(sendToGoogleAnalytics)
    getFID(sendToGoogleAnalytics)
    getFCP(sendToGoogleAnalytics)
    getLCP(sendToGoogleAnalytics)
    getTTFB(sendToGoogleAnalytics)
  }, [])

  return null
}
