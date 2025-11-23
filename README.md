# 🚨 ARGUS Frontend  
**AI-Powered Monitoring Dashboard for Crowd Analysis**

ARGUS is an intelligent, real-time monitoring dashboard designed for large-scale events such as **Kumbh Mela**, providing security teams with a clean and intuitive interface for tracking live CCTV feeds, camera status, crowd density levels, and alert conditions.

This repository contains the **frontend UI**, built using **React + Vite + TailwindCSS**, designed for speed, scalability, and smooth visual effects.

---

## ✨ Key Features (Frontend)

### 🎥 **Live Camera Grid (Window 1)**
- Displays multiple CCTV feeds  
- Modern card design with hover depth animation  
- Status-based glow (Safe / Medium / Critical)  
- Live-pulse indicator showing stream health  
- Double-click to open camera in fullscreen modal  
- Clean collapsible sidebar with dynamic camera details  

---

## 🧠 **Dynamic Indicators**
Each camera card supports:
- **Status Badge** → SAFE / MEDIUM / HIGH  
- **Live Pulse Dot** → Green (Live), Yellow (Slightly delayed), Red (Lagging)  
- **Glow Ring** based on crowd density alert  
- **Selected State Highlight**  
- **Smooth hover scaling & shadows**

All of these will later be driven dynamically from backend API data.

