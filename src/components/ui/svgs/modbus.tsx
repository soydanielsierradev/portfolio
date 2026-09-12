import type { SVGProps } from "react";

/**
 * Modbus RTU mark.
 * Modbus is a protocol, not a product, so it has no official brand mark. This is
 * a hand-built vector of the hub-and-spoke topology Daniel supplied: an amber
 * master surrounded by orange slaves.
 *
 * Reduced from the six-satellite source image to three, with the arrows dropped.
 * The badge renders at 16px, where thirteen elements collapse into an
 * indistinguishable blob; three large circles still read as a topology.
 */
const Modbus = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    <circle cx="100.0" cy="100.0" r="52.0" fill="#F7B743" />
    <g fill="#F38B2F">
    <circle cx="100.0" cy="34.0" r="30.0" />
    <circle cx="157.2" cy="133.0" r="30.0" />
    <circle cx="42.8" cy="133.0" r="30.0" />
    </g>
  </svg>
);

export { Modbus };
