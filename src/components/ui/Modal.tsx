import { X } from "lucide-react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;

  title: string;
  description?: string;

  children?: React.ReactNode;

  confirmText?: string;
  cancelText?: string;

  isLoading?: boolean;

  variant?: "default" | "danger";
};

const Modal = ({
  isOpen,
  onClose,
  onConfirm,

  title,
  description,

  children,

  confirmText = "Confirm",
  cancelText = "Cancel",

  isLoading = false,

  variant = "default",
}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        px-4
      "
    >
      {/* Modal Card */}
      <div
        className="
          w-full max-w-md
          rounded-3xl
          border border-[#FFF8CA]/10
          bg-[#3A1A14]
          p-6
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#FFF8CA]">
              {title}
            </h2>

            {description && (
              <p className="mt-2 text-sm leading-6 text-[#FFF8CA]/70">
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            aria-label="Close modal"
            className="
              shrink-0
              rounded-lg
              p-1
              text-[#FFF8CA]/60
              transition
              hover:bg-[#642409]
              hover:text-[#FFF8CA]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Custom Content */}
        {children && (
          <div className="mt-5">
            {children}
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="
              rounded-xl
              border border-[#FFF8CA]/10
              px-4 py-2
              text-[#FFF8CA]
              transition
              hover:bg-[#642409]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {cancelText}
          </button>

          {onConfirm && (
            <button
              type="button"
              onClick={onConfirm}
              disabled={isLoading}
              className={`
                rounded-xl
                px-4 py-2
                font-medium
                transition
                disabled:cursor-not-allowed
                disabled:opacity-60

                ${
                  variant === "danger"
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-[#FFF8CA] text-[#2D120D] hover:opacity-90"
                }
              `}
            >
              {isLoading ? "Please wait..." : confirmText}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;