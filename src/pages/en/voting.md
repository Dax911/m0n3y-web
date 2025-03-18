---
title: Voting Proposal
description: Initial Voting Proposal for Monopoly Money - Privacy-Preserving Digital Cash on Solana
layout: ../../layouts/docs.astro
lang: en
---

# Designing a Time-Weighted Tiered Voting Mechanism for Solana DAOs

A comprehensive voting mechanism that addresses the concentration of power among early investors and whales by implementing a tier-based approach tied to USD value, holding time, and volume.

## Proposed Solution: Time-Weighted Tiered Value Voting (TW-TVV)

Our proposed voting mechanism addresses the shortcomings of traditional approaches by implementing a tiered system with multiple factors determining voting power.

### Core Design Elements

#### 1. USD Value Tiers Instead of Token Quantity

By tying voting power to the USD value of tokens rather than token quantity, the mechanism mitigates the impact of token price volatility and early acquisition advantages. This approach:

- Standardizes voting influence across different market conditions
- Prevents early investors from maintaining disproportionate control when token value increases
- Creates a more equitable governance system based on current economic commitment

#### 2. Time-Weighted Multiplier

This critical component rewards long-term commitment to the DAO by increasing voting power based on token holding duration:

```
Time Multiplier = Base Factor + (Holding Duration in Days / Time Division Factor)
```

With appropriate caps to prevent excessive voting power concentration among long-term holders while still significantly rewarding loyalty.

#### 3. Volume Consideration with Logarithmic Scaling

To acknowledge larger stakeholders while preventing overwhelming control:

```
Volume Factor = log(USD Value) / Scaling Constant
```

This logarithmic approach ensures voting power increases with stake size but at a decreasing rate, preventing linear concentration of power.

### Implementation Structure

#### Tier Configuration

| Tier | USD Value Range | Base Voting Power |
|------|-----------------|------------------|
| 1    | $10-$100        | 1                |
| 2    | $101-$1,000     | 3                |
| 3    | $1,001-$10,000  | 7                |
| 4    | $10,001-$100,000| 12               |
| 5    | $100,001+       | 18               |

---

#### Time-Weighting Configuration

| Holding Period | Time Multiplier |
|----------------|-----------------|
| 0-30 days      | 1.0x            |
| 31-90 days     | 1.5x            |
| 91-180 days    | 2.0x            |
| 181-365 days   | 2.5x            |
| 366+ days      | 3.0x            |

### Final Voting Power Calculation

```
Voting Power = min(max(Tier Base Power × Time Multiplier × Volume Factor, 1), MaxVotingPower)
```

This formula ensures:
- Everyone has at least minimal voting influence (minimum of 1)
- No single entity can dominate governance (capped at predetermined maximum)
- Long-term holders have meaningfully more influence than short-term speculators
- Larger stakeholders have more say, but with diminishing returns


## Conclusion

The Time-Weighted Tiered Value Voting (TW-TVV) mechanism addresses the fundamental challenges of traditional token-based voting systems by creating a more balanced power distribution that rewards both economic commitment and long-term participation. By tying voting weight to USD value rather than token quantity and incorporating holding duration as a significant factor, this approach mitigates the excessive influence of early investors and whales.
