export default function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)',
          opacity: 0.25,
        }}
      />
    </div>
  )
}
