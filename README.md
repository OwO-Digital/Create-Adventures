# Create: Adventures
**A Create challenge pack that tries to still feel accessible to inexperienced players.**
## Design Philosophy
- Try to keep Vanilla crafting recipes untouched whenever possible
- Attempt to preserve and improve upon the philosophy of Vanilla Minecraft while keeping it somewhat separate from the technical content
- Rebalance the Create mod and its addons in a way that heavily encourages automation
- Encourage storymaking as well as roleplay in the case of multiplayer
- Improve player expression by adding various social features, skin improvements and building blocks
- Make the game less cumbersome by adding various QOL features while still keeping the technical difficulty of Create
- Try to make the modpack fairly accessible by allowing to make all hostile mobs act neutral towards the player
- Keep the game accessible for non-engineers to encourage multiplayer play where players can help and teach each other, providing newbies a safe and calm space to learn by doing so
<br /><br />
## Contributing
This repository uses [packwiz](https://github.com/packwiz/packwiz). It is a fairly simple command-line tool that lets you create modpacks in a git-friendly and simple manner.

These instructions are going to be a heavily simplified version of the [packwiz-installer tutorial](https://packwiz.infra.link/tutorials/installing/packwiz-installer/). If you run into any issues, check the full tutorial first.

1. Get a more advanced Minecraft Launcher, such as [Prism Launcher](https://prismlauncher.org/)
2. Create an instance, doesn't matter what you set the specifics to be. Setting it to Minecraft version 1.19.2 and Quilt version 0.19.1 is highly recommended, though.
3. Download the [packwiz Installer Bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap/releases) and place it in the instance Minecraft folder.
4. Go to Edit Instance -> Settings -> Custom commands, then check the Custom Commands box and paste the following command into the pre-launch command field:
```
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://localhost:8080/pack.toml
```
5. Navigate into the cloned repository in a terminal, and run `packwiz serve`
