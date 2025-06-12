#  Portfolio Hosting Pipeline (Bare-Metal x DevOps)

> _“If you can't host your portfolio yourself, do you even DevOps?”_ — Me

---

###  Host Machine

- **CPU:** Intel i5 10th Gen (F-series, no integrated-GPU)
- **RAM:** 16GB DDR4
- **GPU:** (1GB DDR3 – only for display out)
- **Disk:** 500GB SSD
- **OS:** Debian 11 (bullseye)
- **Network:** Airtel 100Mbps (static IP)

---

###  App Stack

- **Frontend:** React + Vite  
- **Backend:** Static content for now, Python API incoming  
- **Package Manager:** npm  
- **Build tool:** Vite (`npm run build` spits out `/dist`)  

---

### 🏠 Local Access

Running locally using Docker:

```bash
docker build -t portfolio .
docker run -d -p 7000:80 portfolio
```

Accessible at: `http://192.168.1.3:7000` (yes, hardcoded, it's my homeserver)

---

###  Public Access (Nginx Reverse Proxy + Cloudflare Proxy)

- Running an **nginx reverse proxy** on host (port 80/443)
- Reverse proxies traffic to Docker container (`localhost:7000`)
- **Cloudflare DNS** in proxy mode to mask IP and add HTTPS
- traditional reverse proxy + certbot


---


# Automated Deployment: Cron + Shell + Brute Force Elegance

> _“If it ain’t automated, it ain’t DevOps.”_ — Also me

---

### Script: `fetch_deploy.sh`

This tiny beast handles fetching the latest code and rebuilding the container.

---

###  Cron Job Setup

Crontab entry to run the script every 2 minutes:

```cron
*/2 * * * * /home/$USER/Dev/Portfolio/fetch_deploy.sh
```

Edit with:
```bash
crontab -e
```

---

### Logging

Logs are appended to a simple `cron.log`:

Useful for timestamping builds and debugging silent failures.

---


###  What's Next in Line?

- [ ] Add Python backend (REST API for contact form)
- [ ] Monitoring + Grafana dashboards
- [ ] Add push EMAIL notification on deploy
- [ ] Validate build before restart
- [ ] Auto-retry on failure

---

No PM2 required right now, because static site + nginx = good enough. Might switch to full Node server when backend matures.

---

- _— Yashaswi Tiwari, Bare-metal believer