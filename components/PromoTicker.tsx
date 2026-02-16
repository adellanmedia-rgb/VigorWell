'use client'

import Link from 'next/link'

export default function PromoTicker() {
  const message = '🔥 GRAND OPENING EVENT — March 5-7 | All 3 Services for Just $99 (Save 80%!) | Limited Slots — Book Now! 🔥'

  return (
    <div className="relative bg-gradient-to-r from-vigor-orange-600 via-vigor-orange-500 to-vigor-orange-600 overflow-hidden z-[60]">
      <Link href="/booking" className="block">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="inline-block px-12 py-2 font-body text-sm font-bold text-white tracking-wide"
            >
              {message}
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}
