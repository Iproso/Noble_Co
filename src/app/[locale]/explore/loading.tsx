export default function ExploreLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-antique-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-text-muted">Loading...</p>
      </div>
    </div>
  );
}
