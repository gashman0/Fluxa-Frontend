import { X } from "lucide-react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;

  title: string;
  description?: string;

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
      "
    >
      {/* Modal Card */}
      <div
        className="
          w-[80%] max-w-md
          rounded-3xl
          border border-[#FFF8CA]/10
          bg-[#3A1A14]
          p-6
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[#FFF8CA]">
              {title}
            </h2>

            {description && (
              <p className="mt-2 text-sm text-[#FFF8CA]/70">
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-1
              text-[#FFF8CA]/60
              hover:bg-[#642409]
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              rounded-xl
              border border-[#FFF8CA]/10
              px-4 py-2
              text-[#FFF8CA]
              hover:bg-[#642409]
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`
              rounded-xl
              px-4 py-2
              font-medium
              transition

              ${
                variant === "danger"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-[#FFF8CA] text-[#2D120D] hover:opacity-90"
              }
            `}
          >
            {isLoading ? "Please wait..." : confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;