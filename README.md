# 🚨 ARGUS Frontend

> ### AI-Powered Crowd Intelligence & Operational Response System

ARGUS (**AI-Powered Response & Guidance Unified System**) is a modern **AI-assisted command-and-control platform** designed to help authorities monitor, analyze, and respond to crowd situations during large public gatherings such as **Kumbh Mela, festivals, concerts, rallies, religious events, and emergency situations**.

Built using **React + Vite + TailwindCSS**, ARGUS combines **real-time surveillance, crowd intelligence, AI-assisted decision support, and operational response management** into a unified command-center dashboard.

---

# ✨ Key Features

- 📡 Live Surveillance Monitoring
- 🗺️ Interactive Crowd Intelligence Dashboard
- 🧠 AI-Assisted Decision Intelligence
- 🚑 Operational Resource Management
- 📈 Live Crowd Trend Visualization
- 🚨 Incident Detection & Escalation Workflow
- 📋 Deployment Lifecycle Management
- 🔐 Role-Based Authentication & Access Control
- 📊 Operational Activity Timeline
- 🌙 Modern Emergency Operations Center (EOC) Interface

---

# 🧭 Project Vision

ARGUS is designed as a **Real-Time Crowd Intelligence Platform** capable of supporting authorities before, during, and after crowd-related incidents.

Rather than functioning as a passive monitoring dashboard, ARGUS aims to provide:

- Situational Awareness
- AI-Assisted Decision Support
- Human-in-the-Loop Approvals
- Operational Deployment Coordination
- Resource Tracking
- Incident Traceability

The long-term objective is to evolve ARGUS into a deployable command-center platform for real-world crowd management operations.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| React (Vite) | Frontend Framework |
| TailwindCSS | Utility-first Styling |
| React Router DOM | Routing & Navigation |
| Context API | State Management |
| React Leaflet | Interactive Maps |
| OpenStreetMap | GIS Map Tiles |
| Recharts | Live Charts & Analytics |

---

# 🔐 Authentication & Role-Based Access

ARGUS implements frontend role-based authentication and protected routing.

## Supported Roles

| Role | Accessible Modules |
|------|--------------------|
| Operator | Live Monitoring |
| Analyst | Crowd Intelligence |
| Authority | All Operational Modules |
| Admin | Full System Access |

---

# 🏠 Home Dashboard

The Home Dashboard provides an operational overview of the entire ARGUS platform.

### Features

- Welcome Dashboard
- Live Operational Statistics
- Dashboard Quick Access Cards
- Operational Resource Summary
- System Health Overview
- Alert Testing Utility

**Status:** ✅ Implemented

---

# 🎥 Window 1 — Live Monitoring

Provides real-time CCTV surveillance for crowd monitoring operations.

### Features

- Live Camera Grid
- Fullscreen Camera View
- Camera Metadata
- Camera Activity Indicators
- Operational Dark Theme
- Role-Based Access

**Status:** ✅ Implemented

---

# 🗺️ Window 2 — Crowd Intelligence

Interactive GIS-based operational intelligence dashboard.

### Features

- Interactive Crowd Map
- Density Heatmap Visualization
- Crowd Density Zones
- Resource Markers
- Live Crowd Trend Graph
- Incident Intelligence Panel
- Camera Selection & Toggle
- Critical Camera Blink Indicator
- Operational Legend
- Real-Time Status Display

**Status:** 🟡 Frontend Complete (Backend Integration Pending)

---

# 🧠 Window 3 — Decision Intelligence

The Decision Intelligence module serves as the operational command center, enabling authorities to evaluate incidents, coordinate resources, approve AI recommendations, and monitor ongoing deployments.

### 🚨 Alerts & Escalations

- Active Incident Queue
- Severity-Based Alerting
- Global Alert Notifications
- Escalation Management

### 📈 Trends & Analytics

- Live Crowd Trend Visualization
- Historical Trend Monitoring
- Dynamic Analytics Dashboard

### 📋 Operational Activity

- Live Operational Timeline
- Incident History
- Deployment Activity Feed
- Response Tracking

### 🤖 AI Decision Intelligence

- AI Situation Assessment
- Operational Recommendations
- Decision Explanation
- Suggested Response Strategy

### 🚑 Operational Resources

- Resource Availability Overview
- Ambulances, Police Units, Medical Teams & Volunteers
- Live Operational Status
- Available vs Deployed Summary

### 🚓 Deployment Management

- AI Recommendation Approval
- Active Deployments
- Deployment Lifecycle Progression
- Deployment Log Archive

**Status:** ✅ Operational Workflow Implemented

---

# 🔄 Operational Workflow

ARGUS currently supports a complete operational response pipeline.

```text
Live Monitoring
       │
       ▼
Crowd Intelligence
       │
       ▼
Incident Detection
       │
       ▼
Alert Generation
       │
       ▼
Authority Notification
       │
       ▼
AI Decision Support
       │
       ▼
Deployment Approval
       │
       ▼
Resource Dispatch
       │
       ▼
Operational Activity
       │
       ▼
Deployment Resolution
       │
       ▼
Deployment Archive
```

---

# 🚓 Deployment Lifecycle

Every deployment follows a structured operational lifecycle.

```text
COMMAND SENT
      │
      ▼
EN ROUTE
      │
      ▼
ON SITE
      │
      ▼
RESOLVED
```

Completed deployments are automatically archived inside the Deployment Log for operational traceability.

---

# 🎨 UI / UX Highlights

ARGUS follows a modern Emergency Operations Center (EOC) design philosophy.

### Interface Highlights

- 🌙 Dark Command-Center Theme
- 📊 Dashboard-Oriented Layout
- 🗺️ Interactive GIS Mapping
- 📈 Live Analytics
- 🚨 Real-Time Alert Notifications
- 🧠 AI Decision Support Panels
- 🚑 Operational Resource Dashboard
- 📋 Modular Component Architecture
- ⚡ Responsive Design
- 🎯 Minimal-Distraction Interface

---

# 📁 Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── Window1/
│   │
│   ├── Window2/
│   │   ├── Graph/
│   │   ├── Map/
│   │   └── Panels/
│   │
│   ├── Window3/
│   │   ├── AI/
│   │   ├── Alerts/
│   │   ├── Deployments/
│   │   ├── Header/
│   │   ├── Metrics/
│   │   ├── Resources/
│   │   ├── Status/
│   │   ├── Suggestions/
│   │   ├── Timeline/
│   │   ├── Trends/
│   │   └── context/
│   │
│   ├── SplashScreen.jsx
│   └── GlobalAlertPopup.jsx
│
├── context/
│   ├── AlertContext.jsx
│   └── AuthContext.jsx
│
├── layout/
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── ProtectedRoute.jsx
│   └── Sidebar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Window1.jsx
│   ├── Window2.jsx
│   └── Window3.jsx
│
├── hooks/
├── services/
├── api/
└── App.jsx
```

---

# 🚀 Current Status

## ✅ Implemented

- Role-Based Authentication
- Protected Routing
- Command-Center Dashboard
- Live Surveillance Interface
- Interactive Crowd Intelligence Dashboard
- AI Decision Intelligence Module
- Incident Intelligence Panel
- Operational Activity Timeline
- Operational Resource Management
- Deployment Workflow
- Deployment Lifecycle State Machine
- Deployment Log Archive
- Global Alert Notification System
- Splash Screen & Boot Sequence
- ARGUS Branding
- Responsive Dashboard Layout

---

## 🟡 Planned / Future Enhancements

- Backend API Integration
- Live WebSocket Updates
- AI Crowd Density Estimation
- Predictive Crowd Forecasting
- Camera Health Monitoring
- Live CCTV Streaming
- Historical Incident Analytics
- Automated Report Generation
- Multi-User Synchronization
- Push Notifications
- Mobile Dashboard Support

---

# 📸 Screenshots

> Screenshots will be added after backend integration.

| Module | Preview |
|--------|---------|
| 🏠 Home Dashboard | Coming Soon |
| 🎥 Live Monitoring | Coming Soon |
| 🗺️ Crowd Intelligence | Coming Soon |
| 🧠 Decision Intelligence | Coming Soon |

---

# ⚠️ Disclaimer

ARGUS currently represents the **frontend implementation** of a larger AI-powered crowd intelligence platform.

The current version uses **mock operational data** for demonstration purposes.

Future releases will integrate:

- Backend APIs
- AI crowd-density estimation
- Real-time camera feeds
- WebSocket communication
- Live deployment management
- Predictive analytics

---

# 💻 Getting Started

Clone the repository

```bash
git clone https://github.com/ArsenicAsh/ARGUS-Frontend.git
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# 📈 Project Roadmap

- ✅ Modern Command-Center UI
- ✅ Crowd Intelligence Dashboard
- ✅ AI Decision Dashboard
- ✅ Incident Workflow Simulation
- ✅ Operational Resource Management
- 🟡 Backend Integration
- 🟡 AI Model Integration
- 🟡 Live Camera Streams
- 🟡 Predictive Analytics
- 🟡 Production Deployment

---

# 🎯 Project Goal

ARGUS explores how **Artificial Intelligence**, **Computer Vision**, **Crowd Analytics**, and **Operational Intelligence** can be unified into a deployable Emergency Operations Center (EOC) platform.

The project focuses on enabling authorities to make **faster, data-driven decisions** during large-scale public gatherings through real-time monitoring, AI-assisted recommendations, and coordinated operational response.

---

# 🤝 Contributors

Developed by the **ARGUS Development Team**

Bachelor of Engineering  
**Artificial Intelligence & Data Science**

Ajeenkya D. Y. Patil School of Engineering

---

## ⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.

It helps support the project and motivates future development.

---

> **ARGUS — AI-Powered Response & Guidance Unified System**
>
> *"Transforming crowd intelligence into actionable operational decisions."*
