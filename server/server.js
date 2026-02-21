import fetch from "node-fetch";
import { Config } from "../config";

onNet("aimlogs:server:log", async (targetId) => {
  const sourceId = source; 
  const getIdentifier = (playerId, type) => {
    for (let i = 0; i < GetNumPlayerIdentifiers(playerId); i++) {
      const id = GetPlayerIdentifier(playerId, i);
      if (id.includes(type)) return id;
    }
    return "N/A";
  };
  const logPayload = {
    username: Config.BotName,
    embeds: [{
      title: "Aim Detection",
      color: Config.EmbedColor,
      fields: [
        {
          name: "Aggressor",
          value: `**${GetPlayerName(sourceId)}** [ID: ${sourceId}]\n${getIdentifier(sourceId, 'license')}`,
          inline: true
        },
        {
          name: "Target",
          value: `**${GetPlayerName(targetId)}** [ID: ${targetId}]\n${getIdentifier(targetId, 'license')}`,
          inline: true
        }
      ],
      footer: { text: "Aim-Logs" },
      timestamp: new Date().toISOString()
    }]
  };

  try {
    const response = await fetch(Config.Webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logPayload)
    });

    if (!response.ok) console.log(`^1[AimLogs] Discord Error: ${response.statusText}^7`);
  } catch (err) {
    console.error(`^1[AimLogs] Fetch Failed:^7`, err.message);
  }
});