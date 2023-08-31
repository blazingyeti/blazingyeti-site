import Plausible  from "plausible-tracker";
import type { EventOptions, PlausibleOptions } from "plausible-tracker";
import config from "../content/data"

let plausible: ReturnType<typeof Plausible>;

export const initPlausible = () => {
  plausible = Plausible({
    domain: config.domainHost,
    apiHost: config.statsHost,
  });
  plausible.enableAutoPageviews();
};

export const trackEvent = (
  eventName: string,
  options?: EventOptions,
  eventData?: PlausibleOptions
) => {
  plausible = Plausible();
  if (plausible) {
    plausible.trackEvent(eventName, options, eventData);
  }
};

export const trackOutboundLinkClick = (url: string) => {
  plausible.trackEvent("Outbound Link: Click", { props: { url: url } });
};
