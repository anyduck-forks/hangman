import { Link } from "react-router-dom";
import { useCookieConsent } from "../hooks/useCookieConsent";
import { Portal } from "./ui/Portal";

export function CookieConsentPopup() {
  const { isUnknown, accept, decline } = useCookieConsent();

  if (!isUnknown) {
    return null;
  }

  return (
    <Portal
      title="Згода на використання даних"
      showModal={isUnknown}
      showCloseButton={false}
      overlayClassName="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 animate-in fade-in duration-200"
      panelClassName="w-full max-w-3xl rounded-xl border border-gray-700 bg-gray-900/95 shadow-2xl backdrop-blur"
    >
      <p className="text-sm text-gray-300">
        Ми використовуємо localStorage для збереження налаштувань гри та локальної
        iсторiї. Якщо ви вiдхилите, ми використаємо анонiмний userId i все одно
        збережемо налаштування локально. Деталi в{" "}
        <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
          Полiтицi конфiденцiйностi
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={decline}
          className="rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
        >
          Вiдхилити
        </button>
        <button
          type="button"
          onClick={accept}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Прийняти
        </button>
      </div>
    </Portal>
  );
}
