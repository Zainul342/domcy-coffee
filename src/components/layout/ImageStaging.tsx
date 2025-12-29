/**
 * TEMPAT MENEMPEL FOTO HERO (STAGING AREA)
 * ---------------------------------------
 * Silakan ganti URL di dalam tanda kutip (" ") di bawah ini 
 * dengan link gambar yang Anda temukan.
 */

export const HERO_ASSETS = {
    mainFood: '/hero-nasi-transparent.png',
    beverage: '/hero-coffee-transparent.png',
    detail: '/hero-sambal-transparent.png',
    spicyDetail: '/hero-chili-transparent.png', // Added chili
};

export const ImageStaging = () => {
    return (
        <div className="fixed inset-0 z-[999] bg-domcy-black/90 p-10 flex flex-col items-center justify-center overflow-y-auto">
            <div className="bg-white p-6 rounded-2xl max-w-4xl w-full">
                <h2 className="font-display text-3xl text-domcy-green mb-2">IMAGE STAGING AREA</h2>
                <p className="font-sans text-gray-600 mb-8 italic">
                    File ini khusus untuk mengecek gambar yang Anda temukan sebelum kita buat jadi 3D.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Slot 1: Main Food */}
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-xs uppercase text-domcy-accent">1. Main Food (Kiri Atas)</span>
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                            <img src={HERO_ASSETS.mainFood} alt="Main Food" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Slot 2: Beverage */}
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-xs uppercase text-domcy-accent">2. Beverage (Kanan Bawah)</span>
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                            <img src={HERO_ASSETS.beverage} alt="Beverage" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Slot 3: Detail */}
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-xs uppercase text-domcy-accent">3. Detail (Belakang Logo)</span>
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                            <img src={HERO_ASSETS.detail} alt="Detail" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500">
                        *Jika gambar tidak muncul, pastikan link-nya benar.
                    </p>
                </div>
            </div>
        </div>
    );
};
