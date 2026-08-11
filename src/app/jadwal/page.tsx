import Header from '@/components/Header';
import Rundown from '@/components/Rundown';

export default function JadwalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-10">
        <Rundown />
      </div>
    </div>
  );
}