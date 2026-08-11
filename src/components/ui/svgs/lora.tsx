import type { SVGProps } from "react";

/**
 * LoRa mark.
 * Hand-built from the official LoRa logo, reduced to its radio-wave arcs in the
 * brand cyan #00A0E9. Measured contrast is 5.85:1 on the dark theme and 2.91:1 on
 * the light theme.
 *
 * The full logo is a wordmark. Beside a badge already labelled "LoRa" it would
 * repeat the name, its letterforms are illegible at the 16px badge size, and
 * they are solid black, which disappears against the dark theme.
 *
 * Two arcs per side rather than the logo's three: at 16px a third arc merges
 * into its neighbours and the mark reads as a smudge.
 */
const LoRa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#00A0E9"
    strokeWidth={20}
    strokeLinecap="round"
  >
    <path d="M66.4 82.2A38 38 0 0 1 133.6 82.2" />
    <path d="M32.9 64.3A76 76 0 0 1 167.1 64.3" />
    <path d="M133.6 117.8A38 38 0 0 1 66.4 117.8" />
    <path d="M167.1 135.7A76 76 0 0 1 32.9 135.7" />
  </svg>
);

export { LoRa };
