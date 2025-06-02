export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0">
      <span
        className="w-12 h-12 rounded-full inline-block box-border border-5 border-solid 
                 border-t-[#2B3844] border-r-[#2B3844] border-l-[#2B3844] border-b-transparent 
                dark:border-t-white dark:border-r-white dark:border-l-white animate-loader"
      />
    </div>
  );
}
