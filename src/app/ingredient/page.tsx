export default function Ingredient() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">재료 목록</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">재료 이름</h2>
          <p className="text-sm text-gray-500">재료 설명</p>
          <p className="text-sm text-gray-500">재료 도수</p>
          <p className="text-sm text-gray-500">재료 종류</p>
        </div>
      </div>
    </div>
  );
}
