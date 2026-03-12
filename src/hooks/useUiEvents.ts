import { useEffect, useState } from "react";

const MENU_SELECTED_EVENT = "ui:menu-selected";
const CONTACT_SENT_EVENT = "ui:contact-sent";

export interface MenuEventDetail {
  label: string;
  path: string;
  at: string;
}

export interface ContactEventDetail {
  name: string;
  email: string;
  at: string;
}

export function emitMenuSelected(detail: Omit<MenuEventDetail, "at">): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<MenuEventDetail>(MENU_SELECTED_EVENT, {
      detail: { ...detail, at: new Date().toISOString() },
    }),
  );
}

export function emitContactSent(
  detail: Omit<ContactEventDetail, "at">,
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<ContactEventDetail>(CONTACT_SENT_EVENT, {
      detail: { ...detail, at: new Date().toISOString() },
    }),
  );
}

interface UiEventsState {
  lastMenuEvent: MenuEventDetail | null;
  lastContactEvent: ContactEventDetail | null;
}

export function useUiEvents(): UiEventsState {
  const [lastMenuEvent, setLastMenuEvent] = useState<MenuEventDetail | null>(
    null,
  );
  const [lastContactEvent, setLastContactEvent] =
    useState<ContactEventDetail | null>(null);

  useEffect(() => {
    const onMenu = (event: Event) => {
      const customEvent = event as CustomEvent<MenuEventDetail>;
      setLastMenuEvent(customEvent.detail);
    };

    const onContact = (event: Event) => {
      const customEvent = event as CustomEvent<ContactEventDetail>;
      setLastContactEvent(customEvent.detail);
    };

    window.addEventListener(MENU_SELECTED_EVENT, onMenu);
    window.addEventListener(CONTACT_SENT_EVENT, onContact);

    return () => {
      window.removeEventListener(MENU_SELECTED_EVENT, onMenu);
      window.removeEventListener(CONTACT_SENT_EVENT, onContact);
    };
  }, []);

  return { lastMenuEvent, lastContactEvent };
}
