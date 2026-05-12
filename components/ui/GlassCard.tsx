export default function GlassCard({
    children,
    className = "",
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={`bg-white/70 backdrop-blur-xl border border-white/40 rounded-[36px] shadow-xl ${className}`}
        >
            {children}
        </div>
    )
}