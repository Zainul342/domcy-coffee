export const MenuRowSkeleton = () => {
  return (
    <div className="py-6 border-b border-domcy-cream/20 animate-pulse">
      <div className="flex justify-between items-baseline gap-4">
        <div className="flex-1">
          <div className="h-8 md:h-12 bg-domcy-cream/10 w-2/3 rounded mb-3"></div>
          <div className="h-4 bg-domcy-cream/10 w-full max-w-md rounded mb-2"></div>
          <div className="h-4 bg-domcy-cream/10 w-3/4 max-w-sm rounded"></div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="h-8 bg-domcy-cream/10 w-24 rounded"></div>
          <div className="h-10 w-10 rounded-full bg-domcy-cream/10"></div>
        </div>
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-domcy-cream/5 border border-domcy-cream/10 rounded-2xl p-6 animate-pulse h-full">
      <div className="w-full h-48 bg-domcy-cream/10 rounded-xl mb-6"></div>
      <div className="h-8 bg-domcy-cream/10 w-3/4 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-domcy-cream/10 w-full rounded"></div>
        <div className="h-4 bg-domcy-cream/10 w-5/6 rounded"></div>
      </div>
    </div>
  );
};
