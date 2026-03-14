interface RouteArtworkProps {
  variant: "home" | "about" | "testimonial" | "contact";
}

export default function RouteArtwork({ variant }: RouteArtworkProps) {
  return (
    <div className={`route-art route-art-${variant}`} aria-hidden="true">
      <span className="route-art-orb route-art-orb-a" />
      <span className="route-art-orb route-art-orb-b" />
      <span className="route-art-line route-art-line-a" />
      <span className="route-art-line route-art-line-b" />
      <span className="route-art-grid" />
      <span className="route-art-chip route-art-chip-a" />
      <span className="route-art-chip route-art-chip-b" />
    </div>
  );
}
