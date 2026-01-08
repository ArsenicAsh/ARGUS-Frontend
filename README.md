# 🚨 ARGUS Frontend  
**AI-Powered Decision Intelligence Dashboard for Crowd Monitoring**

ARGUS is a real-time **AI-assisted monitoring and decision-support dashboard** designed for large-scale public events (e.g., *Kumbh Mela*, concerts, rallies).  
It provides security and operations teams with **situational awareness**, **predictive insights**, and **actionable recommendations** through a clean, modern UI.

This repository contains the **frontend application**, built with **React + Vite + TailwindCSS**, optimized for performance, scalability, and clarity.

---

## 🧭 Project Vision

ARGUS is not just a monitoring screen — it is a **command & control interface**.

The goal is to:
- Observe live crowd conditions
- Detect anomalies early
- Predict escalation risks
- Recommend and track response actions
- Keep humans in the loop for final decisions

---

## 🧱 Tech Stack

- **React (Vite)** – Fast modern frontend framework  
- **TailwindCSS** – Utility-first styling for rapid UI iteration  
- **Recharts** – Real-time and historical data visualization  
- **Context API** – Shared state across windows (deployments, suggestions)  
- **Modular Component Architecture** – Clean separation by window & feature  

---

## 🪟 UI Windows Overview

### 🪟 Window 1 – Live Camera Monitoring
**Purpose:** Real-time surveillance & camera health overview

**Features:**
- Grid-based live CCTV cards
- Status-based glow (Safe / Warning / Critical)
- Live pulse indicator (stream health)
- Camera metadata sidebar
- Double-click fullscreen modal
- Smooth hover and selection animations

**Status:** ✅ Implemented (UI-ready)

---

### 🪟 Window 2 – Analytics Overview
**Purpose:** Quick analytical summary for operators

**Features:**
- Compact density indicators
- Camera-wise summaries
- Lightweight trend visuals
- Designed for quick scanning

**Status:** 🟡 UI implemented, data mocked

---

### 🪟 Window 3 – Decision Intelligence
**Purpose:** Central command interface for decision-making

**Key Panels:**
- **System Status** – Active cameras, critical zones, alert counts  
- **Key Metrics** – Total crowd, highest density zone, fastest rising area  
- **Trends & History** – Real-time + rolling historical crowd graph  
- **Alerts & Escalations** – Time-ordered system alerts  
- **AI Suggestions** – Recommended actions (approve / later reject)  
- **Active Actions & Deployments** – Live tracking of approved actions  
- **Deployment Log** – Resolved actions (collapsible)

**Status:** ✅ Core UI + interaction flow implemented

---

## 🧠 AI & Decision Flow (Frontend Logic)

1. **AI Suggestion appears**
2. Operator reviews context
3. Operator approves action
4. Action moves to *Active Deployments*
5. Status progresses (Command Sent → En Route → Acknowledged → Resolved)
6. Resolved actions move to *Deployment Log*

> ⚠️ All AI logic is currently mocked and will be driven by backend APIs.

---

## 📁 Project Structure (Simplified)

```text
src/
├── components/
│   ├── Window1/
│   ├── Window2/
│   └── Window3/
│       ├── Header/
│       ├── Status/
│       ├── Metrics/
│       ├── Alerts/
│       ├── Suggestions/
│       ├── Deployments/
│       ├── Trends/
│       ├── context/
│       └── hooks/
│
├── pages/
│   ├── Window1.jsx
│   ├── Window2.jsx
│   └── Window3.jsx
│
├── services/        # Future API connectors
├── hooks/           # Shared/global hooks
├── api/             # API placeholders
