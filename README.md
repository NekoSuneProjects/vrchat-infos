# 🌐 @nekosuneprojects/vrchat-infos

A simple Node.js module to load **VRChat community data** — Worlds, Groups, and Players — directly from local JSON files.  
This project is built to support **VRChat-friendly**, **ToS-compliant**, and **community-respectful** data sharing.

---

## ✨ Features

- 📁 Load data from structured JSON files (`data/worlds`, `data/groups`, `data/players`)
- 🧠 Easy-to-use async API
- 🔒 No external network calls — fully local and privacy-safe
- ❤️ Designed with **VRChat Terms of Service** in mind

---

## 📦 Installation

```bash
npm install @nekosuneprojects/vrchat-infos
```

## 💡 Usage

```
const vrclegends = require('@nekosuneprojects/vrchat-infos');

(async () => {
  const world = await vrclegends.Worlds('testworld');
  const group = await vrclegends.Groups('nekosune');
  const player = await vrclegends.Players('nekosunevr');

  console.log(world, group, player);
})();
```

This will read data from:

```
data/
├── worlds/worldname.json
├── groups/groupname.json
└── players/playername.json
```

## 📘 Example JSON Formats

## 🌍 Worlds (data/worlds/worldname.json)

```json
{
  "name": "The Black Cat",
  "title": "Main Hall",
  "author": "spookyghostboo",
  "aliases": "Black Cat",
  "image": "https://example.com/images/world.jpg",
  "description": "A cozy hangout world for friends.",
  "url": "VRCHAT WORLD URL"
}
```

## 👥 Groups (data/groups/groupname.json)

```json
{
  "name": "NekoSune Community",
  "owner": "NekoSuneVR",
  "image": "https://example.com/images/group.png",
  "description": "A friendly VRChat group for chill vibes and fun events.",
  "url": "VRCHAT GROUP URL"
}
```

## 🧍 Players (data/players/playername.json)

```json
{
    "name": "NekoSuneVR",
    "title": "The Cutie Streamer",
    "species": "half human - half catgirl",
    "gender": "Male",
    "aliases": "ChisdealHDYT, Chisdeal2013, Chisdeal2014, ChisdealHD, progamer-gr, DarkBlackWolfs",
    "image": "https://media.discordapp.net/attachments/794229972490387496/794231249652678696/VRChat_1920x1080_2020-09-14_09-22-18.855.png",
    "description": "A long time ago, Wild Player Chisdeal2013 (later known as ChisdealHDYT). He had been hanging out in a place called [The Black Cat](https://vrchat-legends.fandom.com/wiki/The_Black_Cat), [The Great Pug](https://vrchat-legends.fandom.com/wiki/The_Great_Pug) and [Japan Shrine (ITOAR)](https://vrchat-legends.fandom.com/wiki/Japan_Shrine_(ITOAR)). He had been talking about how he wanted to be Popular on [Twitch](https://twitch.tv/chisdealhdyt) and [TikTok](https://www.tiktok.com/@chisdealhd) / [YouTube](https://www.youtube.com/chisdealhd). Then he did started to streaming on Twitch and Upload Videos on TikTok / YouTube. He loves interest Cryptocurrency Money making and has lot support from [ZENZO Community](https://zenzo.io). He building Community with VRChat, Warframe and many more. He want become as VTuber as Twitch and doing a lot of VR Gaming. That dream is coming very soon in stage getting VR Headset and Brand new VR Ready PC.\n\nYou should Support this Cutie Streamer much on your Heart it can go.",
    "url": "https://creator.nekosunevr.co.uk"
}
```

## 🤝 Pull Requests (PRs)

We welcome contributions, but please follow these important rules carefully:

✅ Permission & Source Rules

Only include data that is publicly available or that you have permission to include.

If the data is not public (e.g., from private VRChat profiles, Discords, or DMs), do not include it.

If unsure, ask the world/group/player owner first.

Use only public sources, such as:

    [V0Chat Legends (Fandom)](https://vrchat-legends.fandom.com)
    Official VRChat public listings or profiles.

🚫 Respect & Safety

    No harassment, bullying, or doxxing.
    Any PR containing harassment, defamation, or private information will be rejected and reported.

    Respect VRChat’s Terms of Service and Community Guidelines.
    Do not include private details, logs, or non-public data.

## 🖼️ Image Requirement

Each world, group, or player must include a valid image URL in its JSON:
```json
"image": "https://example.com/images/item.png"
```

## 📄 Format Consistency

Follow the exact folder and field structure:

```
data/
├── worlds/
├── groups/
└── players/
```

Each JSON should match the examples above.

## 🔍 Accuracy

Ensure all data is accurate, current, and permissioned.

## ⚠️ Disclaimer

This project is not affiliated with or endorsed by VRChat Inc.
All names, logos, and related elements are property of their respective owners.
Always follow the official [VRChat Terms of Service](https://hello.vrchat.com/legal) and [Community Guidelines](https://hello.vrchat.com/community-guidelines)

## 🧠 Credits

Maintained by NekoSune Projects
🐾 Contributions welcome — stay VRChat-friendly!

<!-- GitAds-Verify: 2XHQSF1IKOWF4FH8P2TRI5GRWIJG2TJP -->

## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=nekosuneprojects/vrchat-infos@github)](https://gitads.dev/v1/ad-track?source=nekosuneprojects/vrchat-infos@github)

