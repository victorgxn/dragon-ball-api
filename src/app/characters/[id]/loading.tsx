import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-2 mb-6">
          <Skeleton className="h-9 w-32" />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b-2 border-orange-300 pb-2">
            Información del personaje
          </h2>

          <div className="bg-white dark:bg-blue-950 rounded-3xl shadow-xl overflow-hidden border-2 border-blue-100 dark:border-blue-800">
            <Skeleton className="w-full h-64 md:h-96" />
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Skeleton className="h-8 w-40 mb-4" />
                  <div className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start">
                        <Skeleton className="h-5 w-5 mr-3" />
                        <div className="flex-1">
                          <Skeleton className="h-5 w-28 mb-2" />
                          <Skeleton className="h-3 w-full mb-1" />
                          <Skeleton className="h-3 w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-8 w-40 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b-2 border-orange-300 pb-2">
            Transformaciones
          </h2>
          <div className="bg-white rounded-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-3">
                    <Skeleton className="h-5 w-24 mb-2" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
