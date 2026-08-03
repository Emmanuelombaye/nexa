import Image, { type ImageProps } from 'next/image'

interface SiteImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
}

export default function SiteImage({
  src,
  alt = '',
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px',
  quality = 72,
}: SiteImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className ? `site-image ${className}` : 'site-image'}
        sizes={sizes}
        quality={quality}
        priority={priority}
        fill
        style={{ objectFit: 'cover' }}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 600}
      height={height || 400}
      className={className ? `site-image ${className}` : 'site-image'}
      sizes={sizes}
      quality={quality}
      priority={priority}
      style={{ width: '100%', height: 'auto' }}
    />
  )
}
