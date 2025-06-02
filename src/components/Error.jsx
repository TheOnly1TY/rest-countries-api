export function Error() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      <p className="text-red-600 text-xl font-semibold mb-2">
        ⛔ Country not found
      </p>
      <p className="text-gray-600 dark:text-gray-300 max-w-md text-sm">
        This may be due to a spelling mistake or searching for a country in the
        wrong region. Please double-check and try again.
      </p>
    </div>
  );
}
