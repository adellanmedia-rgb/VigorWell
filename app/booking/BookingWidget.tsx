'use client'

import { useEffect } from 'react'

export default function BookingWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//simplybook.me/v2/widget/widget.js'
    script.async = true
    script.onload = () => {
      if (typeof (window as any).SimplybookWidget !== 'undefined') {
        new (window as any).SimplybookWidget({
          widget_type: 'iframe',
          url: 'https://vigorwellnessspa.simplybook.me',
          theme: 'default',
          theme_settings: {
            timeline_show_end_time: '0',
            timeline_modern_display: 'as_table',
            sb_base_color: '#f97316',
            btn_color_1: '#f97316',
            link_color: '#f97316',
            display_item_mode: 'block',
            body_bg_color: '#ffffff',
            sb_review_image: '',
            dark_font_color: '#1a1a2e',
            light_font_color: '#ffffff',
            sb_company_label_color: '#1a1a2e',
            sb_cancellation_color: '#ef4444',
            hide_img_mode: '0',
          },
          timeline: 'modern',
          datepicker: 'top_calendar',
          is_rtl: false,
          app_config: {
            allow_switch_to_ada: 0,
            predefined: {},
          },
          navigate: 'book',
          container_id: 'sbw_widget',
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="bg-white rounded-3xl shadow-soft-lg overflow-hidden border border-vigor-silver-100 w-full">
      <div id="sbw_widget" className="w-full" style={{ minHeight: '800px' }} />
    </div>
  )
}
