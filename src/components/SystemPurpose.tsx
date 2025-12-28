const SystemPurpose = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-8 text-center shadow-lg mb-8">
      <div className="relative z-10">
        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-100">
          System Purpose • The Queen Bee Role
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-5xl mx-auto">
          Get genuinely high-performing products into the hands of the right customers, 
          ensure they actually use them correctly, and turn them into loyal repeat customers — 
          profitably and at scale.
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 right-4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default SystemPurpose;
