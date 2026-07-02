# wax-wash-trading-volume-deduplicator

**Wash Trading Volume Deduplicator**

A marketplace charts engine that automatically filters out suspected wash trading volumes to display a collection's true organic liquidity on WAX. Helps projects and collectors see real market health without artificial inflation.

**Status:** 🔒 Private (In Development) | Target: Public when v1 complete  
**Category:** Advanced Compliance, Accounting Analytics & Financial Forensics  
**Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

> Built to the same high standard of educational excellence, production readiness, and WAX best practices as the [gkniftyheads-tracker](https://github.com/henrikpiga/gkniftyheads-tracker).

---

## Quick Start

```bash
git clone https://github.com/pixel-journey/wax-wash-trading-volume-deduplicator.git
cd wax-wash-trading-volume-deduplicator
npm install
npm run dev
```

Select a collection in the demo to instantly see deduplicated volume charts and flagged suspicious activity.

---

## Why This Blueprint?

Wash trading artificially inflates volume and floor prices, misleading collectors and projects. This tool automatically detects and removes suspected wash volumes from charts, giving a clearer picture of true organic liquidity and market health.

---

## Architecture & Data Flow

```
Fetch Marketplace Sales History
       ↓
Detect Suspicious Patterns
  - Rapid back-and-forth between wallets
  - Volume spikes without price movement
       ↓
Filter and Deduplicate Data
       ↓
Render Clean Charts
  - Organic volume only
  - Flagged suspicious activity
  - Comparison views
```

All detection and filtering is client-side.

---

## Complete Repository Structure

Follows Pixel Journey high standards.

Key parts:
- `app/` — Main charts interface
- `components/` — VolumeChart, SuspiciousActivityTable, FilterControls, ComparisonView
- `hooks/` — useWashDetection, useDeduplicatedData
- `lib/wax/` — pattern-detector.ts, volume-filter.ts, atomicmarket-history.ts
- `public/mock-data/` — Sample collections with known wash patterns
- `.github/workflows/` — CI automation

Detailed comments on wash trading detection algorithms.

---

## Key WAX Concepts Explained

- **Wash Trading Patterns**: Common on-chain behaviors like rapid asset cycling between small groups of wallets.
- **Volume Deduplication**: Removing artificial volume while preserving real trading activity.
- **AtomicMarket History**: Using public sales data to analyze and clean marketplace metrics.
- **Client-Side Analysis**: Performing detection transparently in the browser.

This is **WAX-primary** (AtomicMarket) but the detection and deduplication pattern is portable to other marketplaces with similar data.

---

## Design Specifications

- Clean charts with clear organic vs flagged volume distinction
- Interactive tables for suspicious activity
- Responsive design
- Accessible controls and detailed explanations

Aligned with Pixel Journey Design System.

---

## Technical Architecture & Best Practices

- **Stack**: Next.js 15, TypeScript, Tailwind + shadcn/ui, charting library
- **Data**: AtomicMarket history with efficient fetching and client-side processing
- **Performance**: Optimized detection with caching for large histories
- **Demo Mode**: Full interactive charts with realistic wash examples

See catalog standards for WAX rate limiting and marketplace best practices.

---

## Demo & Usage

- Explore pre-loaded collections with known wash patterns
- View deduplicated volume charts
- Explore flagged suspicious activity
- Compare raw vs clean data
- Export reports or flagged lists

Designed for immediate marketplace health insight.

---

## Customization

- Adjust detection sensitivity and pattern rules
- Add support for specific collections or marketplaces
- Integrate with other compliance or analytics tools in the catalog
- Customize charts and output

---

## Roadmap

- v1: Core detection + deduplication + demo
- v1.1: Advanced pattern recognition and historical analysis
- Future: Deeper integration with royalty and compliance tools

---

## Contributing & Credits

Built with care for healthier NFT marketplaces on WAX.

MIT License.

Following the production-quality educational standards from the gkniftyheads-tracker.

---

*Pixel Journey — Making Web3 interfaces pixel-perfect and delightful.*