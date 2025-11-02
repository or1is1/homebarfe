"use client";
import { useState } from "react";

export default function IngredientForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [abv, setAbv] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [parentId, setParentId] = useState("");
  const [showAbv, setShowAbv] = useState(false);

  return (
    <form className="mx-auto flex w-full flex-col gap-6 p-8">
      <div className="mb-2">
        <h1 className="text-2xl font-semibold text-gray-900">재료 추가</h1>
        <p className="mt-2 text-sm text-gray-500">새로운 재료를 등록하세요</p>
      </div>
      {/* 재료명 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          재료명
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="예: 스카치 위스키"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
      </div>

      {/* 재료 설명 */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          설명
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="재료에 대한 설명을 입력하세요 (선택사항)"
          rows={3}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
      </div>

      {/* 부모 재료 (재료 분류) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="parentId" className="text-sm font-medium text-gray-700">
          분류
        </label>
        <select
          id="parentId"
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-400 focus:outline-none"
        >
          <option value="">분류 선택 (선택사항)</option>
          <option value="1">증류주</option>
          <option value="2">위스키</option>
          <option value="3">리큐어</option>
          <option value="4">와인</option>
          <option value="5">맥주</option>
          <option value="6">기타</option>
        </select>
      </div>

      {/* 도수 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            id="showAbv"
            type="checkbox"
            checked={showAbv}
            onChange={(e) => setShowAbv(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-400"
          />
          <label
            htmlFor="showAbv"
            className="cursor-pointer text-sm font-medium text-gray-700"
          >
            도수 입력
          </label>
        </div>
        {showAbv && (
          <div className="flex items-center gap-2">
            <input
              id="abv"
              type="number"
              value={abv}
              onChange={(e) => setAbv(e.target.value)}
              placeholder="40"
              min="0"
              max="100"
              step="0.1"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
            <span className="text-sm whitespace-nowrap text-gray-500">%</span>
          </div>
        )}
      </div>

      {/* 공개 여부 */}
      <div className="flex items-center gap-3">
        <input
          id="isPublic"
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-400"
        />
        <label
          htmlFor="isPublic"
          className="cursor-pointer text-sm font-medium text-gray-700"
        >
          다른 사용자와 공유
        </label>
      </div>

      {/* 제출 버튼 */}
      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-teal-400 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
      >
        추가하기
      </button>
    </form>
  );
}
