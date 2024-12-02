import { motion } from "framer-motion";
import { ArrowPathIcon, PlayIcon } from "@heroicons/react/24/solid";
import type { Link } from "./types";
import { Analytics } from "@vercel/analytics/react";

const links: Link[] = [
  {
    title: "Getting Started Guide",
    url: "https://defi-ninja.medium.com/getting-started-with-starknet-setting-up-a-starknet-wallet-059c35849a9c",
    description: "Complete guide to setting up your Starknet wallet",
  },
  {
    title: "Starknet Apps",
    url: "https://www.starknet.io/dapps/",
    description: "Explore the Starknet ecosystem",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Based Enjoyers</h1>
        <p className="text-xl text-gray-300">
          Here's to the Based enjoyers, all you degens, artists, and developers.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center items-center gap-12 my-16">
          <motion.img
            src="/base-logo.png"
            alt="Based Logo"
            className="w-24 h-24"
            animate={{ x: [0, 20], opacity: [1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          />

          <ArrowPathIcon className="w-12 h-12 text-white animate-spin" />

          <motion.img
            src="/starknet-logo.png"
            alt="Starknet Logo"
            className="w-24 h-24"
            animate={{ x: [20, 0], opacity: [0.5, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">The job is not finished;</h2>
          <p className="text-xl text-starknet">Get truly BASED on Starknet.</p>
        </div>

        <motion.a
          href="https://layerswap.io/app?from=base_mainnet&to=starknet_mainnet&asset=eth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 p-8 mb-16 bg-starknet rounded-lg hover:bg-opacity-90 transition-colors mx-auto max-w-lg"
          whileHover={{ scale: 1.05 }}
        >
          <PlayIcon className="w-12 h-12" />
          <span className="text-2xl font-bold">BRIDGE NOW</span>
        </motion.a>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {links.map((link) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-bold mb-2">{link.title}</h3>
              <p className="text-gray-400">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </main>
      <Analytics />
    </div>
  );
};

export default App;
