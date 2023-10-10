import { toNano } from 'ton-core';
import { Safe } from '../wrappers/Safe';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const safe = provider.open(await Safe.fromInit());

    await safe.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(safe.address);

    // run methods on `safe`
}
