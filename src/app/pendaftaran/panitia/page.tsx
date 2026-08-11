import Header from '@/components/Header';
import RegistrationForm from '@/components/RegistrationForm';

export default function PendaftaranPanitiaPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-10">
        <RegistrationForm />
      </div>
    </div>
  );
}