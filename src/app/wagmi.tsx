'use client';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

export const WagmiWrapper = ({ children }: { children: React.ReactNode }) => {
  const { publicClient, webSocketPublicClient } = configureChains(
    [polygon, mainnet],
    [
      publicProvider(),
      jsonRpcProvider({
        rpc: () => ({
          http: `https://rpc.mevblocker.io`,
        }),
      }),
    ]
  );

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  });
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
