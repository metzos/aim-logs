import { Config, sleep } from "../config";

let lastLoggedTarget = null;
let lastLogTime = 0;

setTick(async () => {
  const ped = PlayerPedId();
  if (IsPedArmed(ped, 4)) {
    const [isAiming, target] = GetEntityPlayerIsFreeAimingAt(PlayerId());

    if (isAiming && IsEntityAPed(target) && IsPedAPlayer(target)) {
      const targetServerId = GetPlayerServerId(NetworkGetPlayerIndexFromPed(target));
      const currentTime = GetGameTimer();

      if (targetServerId !== lastLoggedTarget || (currentTime - lastLogTime) > Config.LogCooldown) {
        emitNet("aimlogs:server:log", targetServerId);
        lastLoggedTarget = targetServerId;
        lastLogTime = currentTime;
      }
    }
  }
  await sleep(Config.TickRate);
});