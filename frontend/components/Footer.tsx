export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Praveen Kumar Gandhi. Built with Next.js &amp; FastAPI.</p>
      </div>
    </footer>
  );
}
