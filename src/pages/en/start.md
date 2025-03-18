---
title: Getting Started
description: Getting Started with Monopoly Money - Privacy-Preserving Digital Cash on Solana
layout: ../../layouts/docs.astro
lang: en
---

# Getting Started with Monopoly Money

Welcome to Monopoly Money, a revolutionary privacy-preserving digital cash system built on Solana. This guide will help you understand how to get involved with the project at its current stage and what to expect as we continue development.

## Current Status

Monopoly Money is currently in early development with the following components available:

- **$M0N3Y Governance Token**: Our DAO governance token has been launched on pump.fun and is available for purchase
- **Development Roadmap**: Our technical foundation and implementation plans are solidified
- **Community Building**: Early community formation is underway <br>



## How to Get Involved Today

### 1. Acquire $M0N3Y Governance Tokens

The $M0N3Y token will enable you to participate in governance decisions once the DAO launches. To get your tokens:

1. Visit [pump.fun](https://pump.fun) and search for $M0N3Y
    (Check back regularly for updates to this site as you will be able to purchase tokens directly from the site)
2. Connect your Solana wallet (Phantom, Solflare, etc.)
3. Purchase $M0N3Y tokens using SOL
4. Store your tokens safely in your wallet

**Why get tokens now?** Early community members will have the strongest voice in governance decisions and potentially receive priority access to privacy features when they launch.

### 2. Join Our Community

Stay updated and help shape the future of Monopoly Money:

- **Discord**: Join discussions, ask questions, and connect with other community members
- **GitHub**: Star our repository to track technical progress

### 3. For Developers

If you're a developer interested in privacy technology, zero-knowledge proofs, or Solana development:

- Review our [technical documentation](https://github.com/Dax911/m0n3y-web)
- Experiment with our open-source ZK libraries
- Contribute to discussions about implementation challenges and solutions

## Upcoming Features & Roadmap

### Q3 2025: DAO Launch

The Monopoly Money DAO will govern the protocol with:

- On-chain voting using $M0N3Y tokens
- Treasury management for protocol development
- Parameter adjustments for protocol functioning

### Q4 2025: Privacy-Preserving Stablecoin ($pUSD) Launch

The core privacy-preserving stablecoin will enable:

- 1:1 peg to USDC with full collateralization
- Complete transaction privacy through zero-knowledge proofs
- On-chain redemption with privacy guarantees

### Q1 2026: Offline Transaction Capabilities

The fully offline digital cash experience will feature:

- NFC tap-to-pay between devices
- Offline cryptographic verification
- Multi-day operation without internet connectivity
- Seamless, eventual blockchain settlement

## How It Will Work (Complete System)

When fully implemented, Monopoly Money will function as follows:

### 1. Wrapping & Unwrapping

Users will be able to convert between USDC and $pUSD through a privacy-preserving wrapping process:

```
User deposits USDC → Smart contract mints $pUSD → User receives encrypted note
```

Unwrapping works in reverse:

```
User proves ownership via ZK proof → Smart contract verifies → USDC is released
```

### 2. Private Transactions

All $pUSD transactions will be private by default:

- **On-chain**: Transactions update a Merkle tree without revealing specific values
- **Off-chain**: Direct device-to-device transfers with cryptographic security
- **Sub-division**: Spend any amount (e.g., 4.99 from 10.00) with cryptographic change

### 3. Technical Implementation

The system is built on cutting-edge cryptography:

- **Pedersen Commitments**: Conceal transaction values while enabling verification
- **ZK-SNARKs**: Generate compact proofs that transaction rules are followed
- **Merkleized State**: Efficiently manage state while preserving privacy
- **Secure Element Integration**: Hardware-level security for private keys

### 4. Governance

The $M0N3Y governance token will enable:

- Voting on protocol upgrades and parameter changes
- Staking for rewards and incentives
- Treasury management for ongoing development

## Getting Involved in Development

As a solo-developer project currently, we welcome community contributions:

### For Non-Technical Contributors

- Help with documentation and tutorials
- Community management and outreach
- Testing wallet interfaces and providing feedback
- Spreading awareness about privacy-preserving technology

### For Technical Contributors

- Review and contribute to ZK circuit implementations
- Help develop wallet integrations for privacy features
- Participate in security reviews and audits
- Build applications that leverage the privacy infrastructure

## Resources for Learning

If you're new to zero-knowledge proofs and privacy-preserving technology:

- [Introduction to ZK-SNARKs](https://z.cash/learn/what-are-zk-snarks/)
- [Pedersen Commitments Explained](https://www.rareskills.io/post/pedersen-commitment)
- [Privacy on Solana](https://www.helius.dev/blog/zero-knowledge-proofs-its-applications-on-solana)
- [Digital Cash Systems History](https://groups.csail.mit.edu/mac/classes/6.805/articles/money/nsamint/nsamint.htm)

## Stay Updated

This project is actively developing. The best ways to stay informed:

- Subscribe to our newsletter for milestone announcements
- Join our Discord for daily updates and discussions
- Follow our GitHub repository for technical progress

We're excited to build the future of privacy-preserving digital cash, and we invite you to join us on this journey!
