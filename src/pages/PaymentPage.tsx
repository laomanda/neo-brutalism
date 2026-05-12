import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CreditCard, 
  QrCode, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Info
} from "lucide-react";
import { Icon } from "@iconify/react";
import { Container } from "../components/common/Container";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { buttonVariants } from "../components/ui/buttonVariants";
import { products } from "../data/products.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";
import { cn } from "../utils/cn";

export function PaymentPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState<string>("qris");
  const [isProcessing, setIsProcessing] = useState(false);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Card className="text-center">
          <h2 className="text-2xl font-black uppercase">Product Not Found</h2>
          <button onClick={() => navigate("/")} className="mt-4 font-bold text-[var(--primary)] underline">
            Back to Home
          </button>
        </Card>
      </div>
    );
  }

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment process
    setTimeout(() => {
      setIsProcessing(false);
      alert(language === "id" ? "Pembayaran berhasil disimulasikan!" : "Payment successfully simulated!");
      navigate("/");
    }, 2000);
  };

  const paymentMethods = [
    { id: "qris", name: "QRIS", icon: "logos:qris", color: "#ED1C24" },
    { id: "bca", name: "BCA Virtual Account", icon: "logos:bca", color: "#005596" },
    { id: "mandiri", name: "Mandiri", icon: "logos:mandiri", color: "#003D79" },
    { id: "paypal", name: "PayPal", icon: "logos:paypal", color: "#003087" },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 lg:py-20">
      <Container>
        <button 
          onClick={() => navigate(-1)}
          className="group mb-8 flex items-center gap-2 font-black uppercase tracking-widest text-black/50 transition-colors hover:text-black"
        >
          <ArrowLeft size={18} />
          {language === "id" ? "Kembali" : "Back"}
        </button>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr]">
          {/* LEFT: Payment Form */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="font-heading text-4xl font-black uppercase leading-tight lg:text-6xl">
                {language === "id" ? "Selesaikan Pembayaran" : "Complete Payment"}
              </h1>
              <p className="mt-4 text-lg font-bold text-[var(--muted)]">
                {language === "id" 
                  ? "Pilih metode pembayaran favoritmu dan dapatkan akses instan." 
                  : "Choose your preferred payment method and get instant access."}
              </p>
            </motion.div>

            <Card className="p-0 overflow-hidden">
              <div className="border-b-[3px] border-black bg-[var(--card-2)] p-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="text-[var(--primary)]" size={24} strokeWidth={3} />
                  <h2 className="text-xl font-black uppercase tracking-tight">
                    {language === "id" ? "Metode Pembayaran" : "Payment Method"}
                  </h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={cn(
                        "group relative flex items-center justify-between rounded-2xl border-[3px] p-5 transition-all",
                        selectedMethod === method.id 
                          ? "border-black bg-white shadow-[4px_4px_0_black] -translate-y-1" 
                          : "border-transparent bg-black/5 hover:bg-black/10"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white shadow-[2px_2px_0_black]",
                          selectedMethod === method.id ? "bg-white" : "bg-white/50"
                        )}>
                          <Icon icon={method.icon} className="h-8 w-8 object-contain" />
                        </div>
                        <span className="font-black uppercase tracking-tight text-sm">{method.name}</span>
                      </div>
                      {selectedMethod === method.id && (
                        <CheckCircle2 className="text-[var(--lime)]" size={20} strokeWidth={3} />
                      )}
                    </button>
                  ))}
                </div>

                {selectedMethod === "qris" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 rounded-2xl border-[3px] border-black bg-white p-8 text-center shadow-[6px_6px_0_black]"
                  >
                    <div className="mx-auto h-48 w-48 rounded-xl border-2 border-black bg-white p-2 shadow-[4px_4px_0_black]">
                      <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
                        <QrCode size={100} strokeWidth={1} />
                      </div>
                    </div>
                    <p className="mt-6 text-sm font-black uppercase tracking-widest">Scan to Pay with QRIS</p>
                    <p className="mt-2 text-xs font-bold text-black/40 italic">Supported by all major Indonesian banks & e-wallets</p>
                  </motion.div>
                )}
              </div>
            </Card>

            <div className="flex items-center gap-4 rounded-2xl border-[3px] border-black bg-[var(--lime)]/20 p-5">
              <ShieldCheck className="text-[var(--lime)]" size={24} strokeWidth={3} />
              <p className="text-sm font-bold leading-tight">
                {language === "id" 
                  ? "Transaksi Anda dijamin aman dengan enkripsi SSL 256-bit." 
                  : "Your transaction is secured with 256-bit SSL encryption."}
              </p>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:sticky lg:top-8 h-fit space-y-6">
            <Card className="p-0 overflow-hidden border-[3px] border-black shadow-[10px_10px_0_black]">
              <div className="bg-black p-5 text-white">
                <h2 className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                  <Info size={18} /> {language === "id" ? "Ringkasan Pesanan" : "Order Summary"}
                </h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-[var(--card-2)] shadow-[3px_3px_0_black]">
                    <Icon icon="lucide:package" className="h-8 w-8" />
                  </div>
                  <div>
                    <Badge variant="category">{getText(product.title, language)}</Badge>
                    <h3 className="mt-2 text-xl font-extrabold leading-tight">
                      {getText(product.title, language)}
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between border-b-2 border-dashed border-black/10 pb-3">
                    <span className="font-bold text-black/60">Subtotal</span>
                    <span className="font-black uppercase">Free/Premium</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-dashed border-black/10 pb-3">
                    <span className="font-bold text-black/60">Tax (0%)</span>
                    <span className="font-black">$0.00</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-lg font-black uppercase tracking-tight">Total</span>
                    <span className="text-2xl font-black text-[var(--primary)]">$0.00</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={cn(
                    buttonVariants("primary", "lg", "mt-8 w-full border-[3px] border-black shadow-[6px_6px_0_black]"),
                    isProcessing && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2 italic">Processing...</span>
                  ) : (
                    <span className="flex items-center gap-2 uppercase tracking-widest">
                      {language === "id" ? "Bayar Sekarang" : "Pay Now"}
                      <ChevronRight size={20} />
                    </span>
                  )}
                </button>

                <p className="mt-6 text-center text-[10px] font-bold text-black/40 uppercase">
                  By clicking Pay Now, you agree to our<br/>
                  <span className="underline cursor-pointer">Terms of Service</span>
                </p>
              </div>
            </Card>

            <div className="rounded-2xl border-2 border-dashed border-black/20 p-5 text-center">
              <p className="text-xs font-bold text-black/40">
                {language === "id" 
                  ? "Butuh bantuan? Hubungi WhatsApp kami di halaman kontak." 
                  : "Need help? Contact our WhatsApp on the contact page."}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
