import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import PropTypes from "prop-types";

function CalButton({ title, className }) {
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
    <button
      data-cal-link="lusty9149/session-decouverte-🔭"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {title}
    </button>
  );
}

CalButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CalButton;
