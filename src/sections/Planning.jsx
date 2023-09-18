import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Planning() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#364fc7" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink="lusty9149/session-decouverte-🔭"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
      className="calcom-embed"
    />
  );
}

export default Planning;
