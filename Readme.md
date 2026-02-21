# Aim Logs

A logging system for FiveM servers that detects when players aim at each other and sends detailed reports to Discord via Webhooks.

## Installation

1.  **Download & Extract:** Place the `aim-logs` folder into your server's `resources` directory.
2.  **Configure:** Open `config.js` and paste your Discord Webhook URL into the `Webhook` field.
3.  **Build:** In your terminal, run the following to bundle the code:
    ```bash
    npm install
    npm run build
    ```
4.  **Start:** Add the following to your `server.cfg`:
    ```lua
    ensure aim-logs
    ```
