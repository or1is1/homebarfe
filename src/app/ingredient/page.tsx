"use client";

import { api } from "@/trpc/react";

export default function Ingredient() {
  const { data: ingredients, isLoading } = api.ingredient.getAll.useQuery();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-6 flex w-full max-w-4xl items-center justify-center">
        <h1 className="text-2xl font-bold">재료 목록</h1>
      </div>
      <div className="w-full max-w-4xl">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-gray-500">로딩 중...</p>
          </div>
        ) : ingredients && ingredients.length > 0 ? (
          <div className="flex flex-col gap-4">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-bold">{ingredient.name}</h2>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="mb-4 text-gray-500">등록된 재료가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
