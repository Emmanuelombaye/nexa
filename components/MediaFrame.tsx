import SiteImage from './SiteImage'

interface MediaFrameProps {
  src: string
  alt?: string
  priority?: boolean
  quality?: number
  sizes?: string
  ratio?: string
  aspectRatio?: string
  caption?: string
  tone?: 'light' | 'dark'
  className?: string
  reveal?: string
}

export default function MediaFrame({
  src,
  alt = '',
  priority = false,
  quality = 72,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px',
  ratio = '4 / 3',
  aspectRatio,
  caption,
  tone = 'light',
  className = '',
  reveal,
}: MediaFrameProps) {
  const effectiveRatio = aspectRatio || ratio
  return (
    <figure
      className={`media-frame media-frame--${tone} ${className}`.trim()}
      data-reveal={reveal || undefined}
      style={{ '--media-ratio': effectiveRatio } as React.CSSProperties}
    >
      <div className="media-frame__surface">
        <div className="media-frame__shade" aria-hidden="true" />
        <SiteImage src={src} alt={alt} fill priority={priority} quality={quality} sizes={sizes} />
      </div>
      {caption ? <figcaption className="media-frame__caption">{caption}</figcaption> : null}
    </figure>
  )
}
