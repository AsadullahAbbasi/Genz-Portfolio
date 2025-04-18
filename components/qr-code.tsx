"use client"

import { useEffect, useRef } from "react"
import QRCodeLib from "qrcode"

interface QRCodeProps {
  value: string
  size?: number
}

export default function QRCode({ value, size = 200 }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        },
        (error) => {
          if (error) console.error(error)
        },
      )
    }
  }, [value, size])

  return (
    <div className="inline-block rounded-xl border bg-white p-4 shadow-sm">
      <canvas ref={canvasRef} width={size} height={size} />
    </div>
  )
}
