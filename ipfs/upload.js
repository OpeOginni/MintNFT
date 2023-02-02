// Uploading an Image to IPFS
async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "Tha Amazing World Of Sup",
      attributes: [
        {
          trait_type: "Gumball",
          value: "100",
        },
        {
          trait_type: "Darwin",
          value: "100",
        },
        {
          trait_type: "Web3",
          value: "1000",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmR2xvUG2WwgDwkMv8P8coVi4yuc4gTC18o5y1rZfJ44sq",
      description: "Tha Supreme",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

// Qmd9rpdrFivJfZ5PeK5bS2mE7McsULtgkjwp9YVgpBrTN3

run();
