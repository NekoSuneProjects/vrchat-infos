# 🤝 Contributing to @nekosuneprojects/vrchat-infos

Thank you for your interest in contributing to **@nekosuneprojects/vrchat-infos**!  
This project relies on community help to keep VRChat data organized, accurate, and friendly.

Please read this guide carefully **before submitting a Pull Request (PR)**.

---

## 🦊 Overview

This project provides **VRChat world, group, and player information** in JSON format, used by scripts and tools.  
All data lives in the `data/` folder under:

```
data/
├── worlds/
├── groups/
└── players/
```

Each JSON file represents a public piece of VRChat-related info, such as a world, group, or player.

---

## ✅ Contribution Rules

### 1. Permission & Privacy

- Only include **publicly available data** or **data you have explicit permission** to share.
- If the data comes from **private profiles, Discord servers, or DMs**, **do not submit it**.
- You must **ask permission** from the world/group/player owner if the information is not publicly listed.
- Do **not** upload personal or sensitive details under any circumstance.

### 2. Accepted Public Sources

You may use:
- [VRChat Legends (Fandom)](https://vrchat-legends.fandom.com)
- Official VRChat world pages, group listings, or public user profiles.
- Other verified public sources (must be referenced in the PR description).

If the source is not verifiable or permission is unclear, your PR will be closed.

---

## 🚫 Community & Safety Guidelines

All contributions must comply with:

- **VRChat’s Terms of Service**:  
  [https://hello.vrchat.com/legal](https://hello.vrchat.com/legal)

- **VRChat’s Community Guidelines**:  
  [https://hello.vrchat.com/community-guidelines](https://hello.vrchat.com/community-guidelines)

### Forbidden Content:
- Harassment, bullying, or targeted remarks.
- Doxxing or sharing private user data.
- Hate speech, NSFW content, or anything that violates VRChat or GitHub rules.
- False, misleading, or defamatory information.

Such PRs will be rejected and may result in a report to platform moderators.

---

## 🖼️ Image Requirement

Every JSON file **must include an `image` field** linking to a **safe, representative image** (world thumbnail, group logo, or avatar picture).

Example:
```json
"image": "https://example.com/images/world.png"
```

Images must not contain:
- Private or copyrighted art without permission.
- NSFW or offensive visuals.

---

## 🧩 JSON Format Guidelines

Follow these formats exactly when adding files:

### 🌍 Worlds (`data/worlds/worldname.json`)
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

### 👥 Groups (`data/groups/groupname.json`)
```json
{
  "name": "NekoSune Community",
  "owner": "NekoSuneVR",
  "image": "https://example.com/images/group.png",
  "description": "A friendly VRChat group for chill vibes and fun events.",
  "url": "VRCHAT GROUP URL"
}
```

### 🧍 Players (`data/players/playername.json`)
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

---

## 🪶 How to Submit a Pull Request

1. **Fork** this repository.
2. **Create a new branch** for your changes:
   ```bash
   git checkout -b add-new-world
   ```
3. Add or update JSON files in `data/`.
4. Ensure your files are valid JSON and properly formatted.
5. **Commit and push** your changes:
   ```bash
   git commit -m "Add Example World info"
   git push origin add-new-world
   ```
6. **Open a Pull Request** on GitHub with:
   - A clear title (e.g., “Add Example World data”)
   - A short explanation
   - Source links or permissions if applicable

---

## 🔍 Before Submitting

✅ Validate your JSON syntax using:
```bash
npm run lint
```
(if available) or an online JSON validator.

✅ Make sure:
- You have **permission** to share the content.
- The **image link** works and is safe.
- The **file name matches the item name** (lowercase recommended).

---

## 🧠 Final Notes

- This project is **VRChat-friendly** and follows all ToS and Community Guidelines.  
- The maintainers reserve the right to remove or edit contributions that break policy.
- All content remains under the [MIT License](LICENSE) unless otherwise noted.

---

🐾 Maintained by **NekoSune Projects**  
💬 Community contributions are welcome — just keep it kind, safe, and respectful!
