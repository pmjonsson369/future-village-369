const SacredGeometry = ({ className = "", size = 400, opacity = 0.1 }: { className?: string; size?: number; opacity?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {/* Flower of Life pattern */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const cx = 200 + 50 * Math.cos((angle * Math.PI) / 180);
        const cy = 200 + 50 * Math.sin((angle * Math.PI) / 180);
        return (
          <circle
            key={angle}
            cx={cx}
            cy={cy}
            r={50}
            fill="none"
            stroke="hsl(262 76% 57%)"
            strokeWidth="0.5"
          />
        );
      })}
      <circle cx={200} cy={200} r={50} fill="none" stroke="hsl(262 76% 57%)" strokeWidth="0.5" />
      <circle cx={200} cy={200} r={100} fill="none" stroke="hsl(155 55% 54%)" strokeWidth="0.3" />
      <circle cx={200} cy={200} r={150} fill="none" stroke="hsl(262 76% 57%)" strokeWidth="0.2" />
    </svg>
  );
};

export default SacredGeometry;
