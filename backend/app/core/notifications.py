import os
import ssl
import smtplib
import logging
from email.message import EmailMessage
from typing import Any, Dict

logger = logging.getLogger(__name__)


def _config() -> Dict[str, str]:
    """Read SMTP settings from the environment."""
    return {
        "host": os.getenv("SMTP_HOST", ""),
        "port": os.getenv("SMTP_PORT", "587"),
        "user": os.getenv("SMTP_USER", ""),
        "password": os.getenv("SMTP_PASSWORD", ""),
        # Where to deliver the notification. Defaults to the SMTP account itself.
        "to": os.getenv("CONTACT_NOTIFY_TO", "") or os.getenv("SMTP_USER", ""),
        # The From address. Many providers (Gmail) require this to match SMTP_USER.
        "from": os.getenv("CONTACT_NOTIFY_FROM", "") or os.getenv("SMTP_USER", ""),
    }


def send_contact_notification(record: Dict[str, Any]) -> None:
    """
    Email a contact-form submission to the site owner.

    Never raises: the message is already persisted to contacts.json before this
    runs, so a mail failure must not break the request. Missing SMTP config is a
    no-op (useful for local/dev where email is not set up).
    """
    cfg = _config()

    if not (cfg["host"] and cfg["user"] and cfg["password"] and cfg["to"]):
        logger.warning("SMTP not configured; skipping contact email notification")
        return

    msg = EmailMessage()
    msg["Subject"] = f"New portfolio message from {record.get('name', 'unknown')}"
    msg["From"] = cfg["from"]
    msg["To"] = cfg["to"]
    # Lets you hit "Reply" and answer the visitor directly.
    if record.get("email"):
        msg["Reply-To"] = record["email"]

    msg.set_content(
        "You received a new message via your portfolio contact form.\n\n"
        f"Name:    {record.get('name', '')}\n"
        f"Email:   {record.get('email', '')}\n"
        f"When:    {record.get('received_at', '')}\n"
        f"IP:      {record.get('ip', '')}\n"
        f"Agent:   {record.get('user_agent', '')}\n\n"
        "Message:\n"
        f"{record.get('message', '')}\n"
    )

    try:
        port = int(cfg["port"])
        context = ssl.create_default_context()
        if port == 465:
            with smtplib.SMTP_SSL(cfg["host"], port, context=context, timeout=10) as server:
                server.login(cfg["user"], cfg["password"])
                server.send_message(msg)
        else:
            with smtplib.SMTP(cfg["host"], port, timeout=10) as server:
                server.starttls(context=context)
                server.login(cfg["user"], cfg["password"])
                server.send_message(msg)
        logger.info("Contact email notification sent to %s", cfg["to"])
    except Exception as exc:  # noqa: BLE001
        logger.error("Failed to send contact email notification: %s", exc)
