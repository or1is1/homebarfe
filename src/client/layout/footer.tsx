export default async function Footer() {
  return (
    <footer className="flex justify-center bg-slate-900 py-8 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 text-sm md:flex-row">
          <span>© 2025 홈바페. All rights reserved.</span>
          {/* <a href="#" className="transition-colors hover:text-white">
            서비스 소개
          </a>
          <a href="#" className="transition-colors hover:text-white">
            이용약관
          </a>
          <a href="#" className="transition-colors hover:text-white">
            개인정보처리방침
          </a>
          <a href="#" className="transition-colors hover:text-white">
            문의하기
          </a> */}
        </div>
      </div>
    </footer>
  );
}
