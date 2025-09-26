export default function RepoSkeleton() {
  return (
    <li className="rounded-sm border-[1px] border-gray-200 transition animate-pulse w-[49%] h-40">
      <div className="h-full w-full p-4 flex flex-col justify-between">
        <div>
          <div className="flex flex-row justify-between">
            <div className="w-1/3 h-4 bg-gray-300 rounded-sm"></div>
            <div className="w-11 h-4 bg-gray-300 rounded-sm"></div>
          </div>
          <div className="mt-3 w-4/5 h-4 bg-gray-300 rounded-sm"></div>
          <div className="mt-1 w-7/10 h-4 bg-gray-300 rounded-sm"></div>
          <div className="w-24 mt-2 h-4 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="w-34 h-4 bg-gray-300 rounded-sm"></div>
      </div>
    </li>
  );
}
