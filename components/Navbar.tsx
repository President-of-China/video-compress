import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-6">
        {/* 左側 Logo（完全保留原專案風格） */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-semibold tracking-tight"
        >
          {/* 如果原專案有圖示，這裡可以放 <img src="/logo.svg" alt="Video Compress" className="h-7 w-7" /> */}
          Video Compress
        </Link>

        {/* 右側全部移除，不顯示任何連結或按鈕 */}
      </div>
    </nav>
  );
};
