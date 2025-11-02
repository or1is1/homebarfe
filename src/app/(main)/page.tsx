export default async function Home() {
  return (
    <div className="min-h-screen px-6">
      {/* Hero Section */}
      <section className="mx-auto pt-10 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl leading-tight font-bold text-slate-900 md:text-6xl">
            집에서 즐기는
            <br />
            <span style={{ color: "#39c5bb" }}>프로페셔널</span> 칵테일
          </h1>
          <p className="mb-10 text-xl leading-relaxed text-slate-600">
            나만의 홈바를 완성하세요. 레시피부터 재료 관리까지,
            <br />
            칵테일 애호가를 위한 올인원 플랫폼
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 overflow-hidden rounded-2xl shadow-2xl">
          <div
            className="flex h-96 w-full items-center justify-center"
            style={{ backgroundColor: "#39c5bb", opacity: 0.1 }}
          ></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              당신의 홈바를 위한 모든 것
            </h2>
            <p className="text-lg text-slate-600">
              전문 바텐더의 노하우를 집에서 경험하세요
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-slate-200 p-8 transition-shadow hover:shadow-lg">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#39c5bb", opacity: 0.1 }}
              ></div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                1000+ 레시피
              </h3>
              <p className="leading-relaxed text-slate-600">
                클래식부터 트렌디한 칵테일까지, 상세한 레시피와 제조 방법을
                제공합니다
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-slate-200 p-8 transition-shadow hover:shadow-lg">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#39c5bb", opacity: 0.1 }}
              >
                x
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                AI 추천
              </h3>
              <p className="leading-relaxed text-slate-600">
                보유한 재료로 만들 수 있는 칵테일을 자동으로 추천해드립니다
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-slate-200 p-8 transition-shadow hover:shadow-lg">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#39c5bb", opacity: 0.1 }}
              ></div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                커뮤니티
              </h3>
              <p className="leading-relaxed text-slate-600">
                홈바 애호가들과 레시피를 공유하고 영감을 얻으세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl">
        <div className="mx-auto text-center">
          <div
            className="rounded-2xl p-12"
            style={{ backgroundColor: "#39c5bb" }}
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              지금 바로 시작하세요
            </h2>
            <p className="mb-8 text-xl text-white/90">
              무료로 가입하고 프리미엄 레시피를 경험해보세요
            </p>
            <button
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
              style={{ color: "#39c5bb" }}
            >
              무료 회원가입
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
