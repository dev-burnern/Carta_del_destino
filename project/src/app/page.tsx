export default function Page() {
  return (
    <main className="min-h-dvh grid place-items-center bg-gradient-to-br from-slate-50 to-slate-200 p-8">
      <div className="rounded-2xl bg-white shadow-xl p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold tracking-tight">Tailwind 연결 OK</h1>
        <p className="mt-2 text-slate-600">
          이 카드가 둥글고 그림자, 배경 그라데이션, 폰트 스타일이 보이면 성공입니다.
        </p>
        <button className="mt-4 px-4 py-2 rounded-xl bg-black text-white hover:opacity-90 active:scale-95 transition">
          버튼 스타일 테스트
        </button>
      </div>
    </main>
  );
}
