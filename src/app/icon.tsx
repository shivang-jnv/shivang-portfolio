// Create app/icon.tsx for dynamic favicon generation
import { ImageResponse } from 'next/og'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#1f2937', // gray-800 to match your theme
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'system-ui',
          border: '2px solid #4b5563', // gray-600 border
          borderRadius: '4px',
        }}
      >
        SK
      </div>
    ),
    {
      ...size,
    }
  )
}
