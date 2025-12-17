# Dynamic Quest System

The UI base template and diamond icons were inspired by [asset store](https://act.hoyoverse.com/ys/prod/ugc/component-store/index.html#/item/1997381320145154048).
*PS: All scripts and logic were written from scratch; only the visual design was borrowed.*

---

## Description
The quest system is fully customizable and expandable, built on structured data.
To create a quest, you need to add **2 variables** to the desired object/prefab:
- **Quest** — a structure defining the quest.
- **QuestActive** — a boolean for local filters.

You can trigger a quest via the **Quest/SwapQuest** signal in the level logic. Embed it anywhere and extend it as needed.

Quest text and type settings are configured in the **Quest** structure of the object the quest references.
*The system supports localization for translations!*

---

## Post-Import Setup Guide

1. Create **8 variables** in the level entity and name them as in the **NQ_QuestPresetVARs** prefab (placeholder values are required; you can copy them from there).
2. Add **NQ_MainLogic** to the level entity.
3. Add **QuestUI** to the menu layout and copy its index.
4. Open the **NQ_QuestUI_Optimization** composite node and paste the index into the local variable.
5. Ensure the **GUID** of your level entity is correct in the **Level** composite node.
6. Create a **distanceToQuest** variable (integer) for the player and attach the **NQ_DistanceToQ** script (*NOT to the character or class!*).
7. For test objects in the world, set a local filter for **VFX** and **Nameplate** based on **NQ_QuestActive**.
8. Test and adapt the system to your needs.

> **Warning!**
> If you rename variables in objects or prefabs, update them in the scripts as well!

---

## Prefabs and Objects
Prefabs are provided for testing logic and are not required after completing steps 1–6.
Objects are configured to interact with each other.

---

## Structure Descriptions

### Quest

Quest Structure


| Field          | Description                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------|
| Title          | Quest title.                                                                                   |
| Description    | Quest description.                                                                            |
| Type           | Index defining the icon, color, and size.                                                     |
| Next           | GUID of the object the quest switches to after the **SwapQuest** signal. If `0`, no new quest appears. |
| AllPlayers     | If `true`, the quest will be visible to all players in the UI (for co-op quests).             |
| QuestEnity     | Self-referencing entity for distance calculation logic.                                        |

---

### TypesQuests

TypesQuests Structure


| Field              | Description                                                                                     |
|--------------------|-------------------------------------------------------------------------------------------------|
| Diamonds           | Background of the quest icon.                                                                   |
| Glyphs             | Foreground symbol of the quest icon.                                                            |
| SizeDiamond        | Size of the background.                                                                         |
| SizeGlyph          | Size of the symbol text.                                                                        |
| ColorsDiamonds     | Color for the background.                                                                       |
| ColorsGlyphs       | Color for the symbol.                                                                           |

> **Note:**
> When adding a new type, ensure every dictionary has a value, even if it duplicates existing data!