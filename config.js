export const Config = {
  Webhook: "YOUR_WEBHOOK_HERE",
  TickRate: 500, // How often to check for aiming
  LogCooldown: 10000, //(milliseconds) Time to wait until logging the same target again | Set to 0 to disable.
  EmbedColor: 11730954,
  BotName: "Aim Logs"
};

/* Don't Touch This */
export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));