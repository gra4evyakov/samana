import { computed } from "vue";

export function init() {
  const telegram = window.Telegram.WebApp;

  telegram.setBackgroundColor("#ffffff");
  telegram.setHeaderColor("#ffffff");
  telegram.setBottomBarColor("#ffffff");

  telegram.expand();
  telegram.disableVerticalSwipes();

  const desktopPlatform = ["tdesktop", "macos", "unknown"];
  const isDesktop = computed(() => desktopPlatform.includes(telegram.platform));

  if (telegram.isVersionAtLeast("8.0") && !isDesktop.value) {
    telegram.requestFullscreen();
  }

  if (telegram.isVersionAtLeast("7.7") && !isDesktop.value) {
    telegram.disableVerticalSwipes();
  }
}
