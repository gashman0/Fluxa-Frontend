import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  CheckCircle2,
  CircleAlert,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

type PaymentStatus = "processing" | "success" | "failed";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();

  const reference =
    searchParams.get("reference") || searchParams.get("trxref");

  const [status, setStatus] = useState<PaymentStatus>("processing");
  const [message, setMessage] = useState(
    "We're confirming your payment securely.",
  );

  useEffect(() => {
    if (!reference) {
      setStatus("failed");
      setMessage("We couldn't find a payment reference.");
      return;
    }

    let interval: ReturnType<typeof setInterval> | null = null;

    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/payment/status/${reference}`,
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error("Unable to check payment status");
        }

        const data = await response.json();

        /*
         * Expected backend response:
         *
         * {
         *   status: "pending" | "success" | "failed"
         * }
         */

        if (data.status === "success") {
          setStatus("success");
          setMessage("Your Fluxa Pro subscription is now active.");

          if (interval) {
            clearInterval(interval);
            interval = null;
          }

          return;
        }

        if (data.status === "failed") {
          setStatus("failed");
          setMessage(
            "We couldn't confirm this payment. Please check your transaction.",
          );

          if (interval) {
            clearInterval(interval);
            interval = null;
          }

          return;
        }

        setStatus("processing");
        setMessage("Your payment is being confirmed...");
      } catch (error) {
        console.error("Payment status check failed:", error);
      }
    };

    // Check immediately
    checkPaymentStatus();

    // Then check periodically
    interval = setInterval(checkPaymentStatus, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [reference]);

  return (
    <div className="min-h-screen bg-[#2D120D] text-[#FFF8CA]">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl">
          {/* Logo */}
          <div className="mb-10 flex items-center justify-center">
            <Link to="/home" className="flex items-center gap-3">
              <img
                src="/Group.svg"
                alt="Fluxa"
                className="h-9 w-auto"
              />

              <span className="text-2xl font-bold tracking-tight">
                Fluxa
              </span>
            </Link>
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-3xl border border-[#FFF8CA]/10 bg-[#3A1711] shadow-2xl">
            {/* Top accent */}
            <div className="h-1 w-full bg-[#FFF8CA]" />

            <div className="px-7 py-10 text-center sm:px-12 sm:py-14">
              {/* Processing */}
              {status === "processing" && (
                <>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF8CA]/10">
                    <Loader2
                      size={38}
                      className="animate-spin text-[#FFF8CA]"
                    />
                  </div>

                  <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#FFF8CA]/50">
                    Payment verification
                  </p>

                  <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Confirming your payment
                  </h1>

                  <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#FFF8CA]/60">
                    {message}
                  </p>

                  <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-[#FFF8CA]/10 bg-[#2D120D]/50 px-5 py-4 text-left">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-[#FFF8CA]/70"
                      />

                      <div>
                        <p className="text-sm font-medium text-[#FFF8CA]">
                          Your payment is secure
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#FFF8CA]/50">
                          Fluxa is waiting for payment confirmation from
                          Paystack. This usually takes only a few moments.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Success */}
              {status === "success" && (
                <>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF8CA]/10">
                    <CheckCircle2
                      size={42}
                      className="text-[#FFF8CA]"
                    />
                  </div>

                  <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#FFF8CA]/50">
                    Payment confirmed
                  </p>

                  <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Welcome to Fluxa Pro
                  </h1>

                  <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#FFF8CA]/60">
                    {message}
                  </p>

                  <div className="mt-8 rounded-2xl border border-[#FFF8CA]/10 bg-[#2D120D]/50 p-5 text-left">
                    <p className="text-xs uppercase tracking-wider text-[#FFF8CA]/40">
                      Transaction reference
                    </p>

                    <p className="mt-2 break-all font-mono text-sm text-[#FFF8CA]/80">
                      {reference}
                    </p>
                  </div>

                  <Link
                    to="/home"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFF8CA] px-6 py-3.5 font-medium text-[#2D120D] transition hover:opacity-90"
                  >
                    Continue to Fluxa
                    <ArrowRight size={17} />
                  </Link>
                </>
              )}

              {/* Failed */}
              {status === "failed" && (
                <>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
                    <CircleAlert
                      size={42}
                      className="text-red-300"
                    />
                  </div>

                  <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#FFF8CA]/50">
                    Payment issue
                  </p>

                  <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    We couldn't confirm your payment
                  </h1>

                  <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#FFF8CA]/60">
                    {message}
                  </p>

                  {reference && (
                    <div className="mt-8 rounded-2xl border border-[#FFF8CA]/10 bg-[#2D120D]/50 p-5 text-left">
                      <p className="text-xs uppercase tracking-wider text-[#FFF8CA]/40">
                        Transaction reference
                      </p>

                      <p className="mt-2 break-all font-mono text-sm text-[#FFF8CA]/80">
                        {reference}
                      </p>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                      to="/home"
                      className="inline-flex items-center justify-center rounded-xl border border-[#FFF8CA]/15 px-6 py-3.5 font-medium text-[#FFF8CA] transition hover:bg-[#FFF8CA]/5"
                    >
                      Back to Fluxa
                    </Link>

                    <Link
                      to="/home"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFF8CA] px-6 py-3.5 font-medium text-[#2D120D] transition hover:opacity-90"
                    >
                      Try again
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-[#FFF8CA]/10 px-6 py-5 text-center">
              <p className="text-xs text-[#FFF8CA]/40">
                Secured payment processing by Paystack
              </p>
            </div>
          </div>

          {/* Reference */}
          {reference && status === "processing" && (
            <p className="mt-6 text-center text-xs text-[#FFF8CA]/30">
              Reference: {reference}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentCallback;