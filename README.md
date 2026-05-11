# 🚨 ARGUS Frontend

### AI-Powered Crowd Intelligence & Operational Response System

ARGUS is a real-time **AI-assisted crowd intelligence and emergency response platform** designed for large-scale public gatherings such as **Kumbh Mela, concerts, rallies, festivals, and high-density public events**.

Built as a modern **command & control interface**, ARGUS enables operators, analysts, and authorities to:

* Monitor crowd activity in real time
* Detect abnormal density patterns
* Escalate operational incidents
* Coordinate deployments and responses
* Track incident resolution lifecycles

This repository contains the **frontend application**, built with **React + Vite + TailwindCSS**, with a modular architecture designed for scalability, operational clarity, and future backend integration.

---

# 🧭 Project Vision

ARGUS is designed as a:

> **Real-Time Operational Intelligence Platform**

Rather than functioning as a passive monitoring dashboard, ARGUS aims to provide:

* Situational awareness
* Human-in-the-loop AI recommendations
* Incident escalation management
* Deployment coordination
* Operational traceability

The long-term goal is to create a deployable command-center system capable of supporting real-world crowd management operations.

---

# 🧱 Tech Stack

* **React (Vite)** — Fast modern frontend framework
* **TailwindCSS** — Utility-first styling system
* **React Router DOM** — Protected routing & role-based navigation
* **Context API** — Shared operational state management
* **Recharts** — Real-time analytics & trend visualization
* **Modular Component Architecture** — Scalable window-based structure

---

# 🔐 Authentication & Access Control

ARGUS includes a frontend role-based access system with:

* Secure login flow
* Protected routes
* Role-based module visibility
* Operational access separation

### Supported Roles

| Role      | Access                 |
| --------- | ---------------------- |
| Operator  | Surveillance           |
| Analyst   | Analytics              |
| Authority | Full Operations Access |
| Admin     | Full System Access     |

---

# 🪟 System Modules

---

## 🪟 Home / Control Hub

**Purpose:** Central operational overview

### Features

* Global system overview
* Active alert summary
* Quick-access navigation
* Operational system health
* Real-time alert testing
* Integrated command-center UI

**Status:** ✅ Implemented

---

## 🪟 Window 1 – Live Surveillance Monitoring

**Purpose:** Real-time camera monitoring & surveillance operations

### Features

* Live CCTV grid interface
* Status-based visual indicators
* Camera activity pulse system
* Fullscreen surveillance modal
* Camera metadata display
* Operational dark-theme UI

**Status:** ✅ Implemented

---

## 🪟 Window 2 – Crowd Analytics & Heatmap Visualization

**Purpose:** Crowd intelligence and analytical monitoring

### Features

* Density heatmap visualization
* Zone-based analysis
* Resource legends
* Trend monitoring
* Operational map overlays

**Status:** 🟡 UI implemented, backend integration pending

---

## 🪟 Window 3 – Decision Intelligence & Operations

**Purpose:** Incident escalation and response coordination

### Core Operational Components

#### 🚨 Alerts & Escalations

* Real-time incident queue
* Severity-based alerting
* Acknowledgement system
* Global popup notifications

#### 🧠 AI Suggestions

* Operational recommendations
* Human approval workflow
* Decision-support architecture

#### 🚓 Active Actions & Deployments

* Incident response tracking
* Deployment lifecycle management
* State-machine progression

#### 📜 Deployment Log

* Resolved deployment archive
* Operational traceability
* Historical response records

**Status:** ✅ Core operational workflow implemented

---

# 🔄 Operational Workflow

ARGUS currently supports a complete operational incident pipeline:

```text
Incident Detected
        ↓
Alert Generated
        ↓
Popup Notification
        ↓
Operations Queue
        ↓
Authority Responds
        ↓
Deployment Created
        ↓
Deployment Lifecycle Progression
        ↓
Resolution & Archival
```

---

# 🚓 Deployment Lifecycle

Deployments progress through structured operational states:

```text
COMMAND_SENT
      ↓
EN_ROUTE
      ↓
ON_SITE
      ↓
RESOLVED
```

Resolved deployments automatically move into the deployment archive log.

---

# 🎨 UI / UX Highlights

* Dark operational command-center design
* ARGUS branded system identity
* Boot / initialization sequence
* Responsive modular layouts
* Real-time notification system
* Minimal-distraction interface philosophy

---

# 📁 Project Structure (Simplified)

```text
src/
├── assets/
├── components/
│   ├── Window1/
│   ├── Window2/
│   ├── Window3/
│   │   ├── Alerts/
│   │   ├── Deployments/
│   │   ├── Header/
│   │   ├── Metrics/
│   │   ├── Status/
│   │   ├── Suggestions/
│   │   ├── Trends/
│   │   ├── context/
│   │   └── hooks/
│
├── context/
│   ├── AuthContext.jsx
│   └── AlertContext.jsx
│
├── layout/
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Window1.jsx
│   ├── Window2.jsx
│   └── Window3.jsx
│
├── services/       # Future backend/API connectors
├── hooks/          # Shared/global hooks
├── api/            # API placeholders
```

---

# 🧠 Current Status

### ✅ Implemented

* Operational UI architecture
* Authentication & role-based access
* Protected routing
* Incident alert system
* Real-time popup notifications
* Deployment workflow management
* Deployment lifecycle state machine
* Operational command-center design
* Splash / boot sequence
* ARGUS branding integration

### 🟡 Planned / Future Work

* Backend API integration
* Real-time websocket updates
* AI-powered anomaly detection
* Camera health monitoring
* Incident history archive
* Live operational metrics
* Auto-generated analytics alerts
* Multi-user synchronization

---

# ⚠️ Disclaimer

ARGUS is currently a frontend-focused prototype and operational workflow simulation platform.

AI recommendations, analytics, and operational data are currently mocked and will later be powered by backend services and machine learning systems.

---

# 👨‍💻 Development

```bash
npm install
npm run dev
```

---

# 📌 Project Goal

The objective of ARGUS is to explore how:

* AI-assisted surveillance
* operational intelligence
* human-in-the-loop decision systems
* and real-time response coordination

can be unified into a deployable command-center platform for high-density public environments.
