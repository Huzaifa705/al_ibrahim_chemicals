export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Brand aligned double spinner */}
          <div className="absolute inset-0 animate-spin rounded-full border-b-4 border-l-4 border-brand-primary opacity-80"></div>
          <div className="absolute inset-2 animate-spin rounded-full border-t-4 border-r-4 border-brand-dark opacity-60" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <p className="text-slate-600 font-bold tracking-widest uppercase text-sm">Loading...</p>
      </div>
    </div>
  )
}