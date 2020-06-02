const url = "https://deno.land";
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.writeFile("source-code.txt", body);
