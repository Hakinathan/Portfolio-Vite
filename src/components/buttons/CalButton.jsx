import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

function CalButton() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#364fc7" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setIsLoading(false);
    })();
  }, []);

  return (
    <button
      data-cal-link="lusty9149/session-decouverte-🔭"
      data-cal-config='{"layout":"month_view"}'
      className={`cal-button ${isLoading ? "cal-button--loading" : ""}`}
    >
      Prendre un rendez-vous 📅
    </button>
  );
}

export default CalButton;
