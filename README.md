
## Melodia Protocol

<br/>
<br/>

Melodia is a decentralized music-sharing protocol, which provides a blockchain based solution to help artists publish and monitize music across the online community

We are on a mission to give everyone the freedom to share and monetize music

### How this works

<img width="532" alt="image" src="https://user-images.githubusercontent.com/109826789/180567372-38220324-553f-4149-ae34-ad5ffd8886e8.png">


### Running a node

```bash
git clone https://github.com/melodia-protocol/melodia-protocol.git
cd melodia-protocol
# Add a line to your rc file of choice
# export PROTOCOL_DIR=$(pwd)

npm i
# This will install `A` to your command-line, an interface to the melodia service-commands.
# Ensure ~/.local/bin is in your PATH

# Install all dependencies
A init

# Run the entire stack
A up

# Run an individual service
A run discovery-provider up
A run discovery-provider down
```

## Contributing

We welcome contributions to melodia from anyone who opens a PR
