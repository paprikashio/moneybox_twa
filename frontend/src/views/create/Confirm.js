import Page from "../../components/Page/Page";
import Placeholder from "../../components/Placeholder/Placeholder";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import {Minter} from "../../contracts/Minter/tact_Minter.ts";
import {Safe} from "../../contracts/Minter/tact_Safe.ts";
import {Address} from "ton-core";
import useTonClient from "../../hooks/useTonClient";
import {useEffect, useState} from "react";
import {useTonAddress, useTonWallet} from "@tonconnect/ui-react";
import BigInt from 'big-integer';
import useStorage from "../../hooks/useStorage";
import {MainButton} from "@twa-dev/sdk/react";
import {contractAddress} from "../../consts/config";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const Confirm = () => {

    const { t } = useTranslation();

    const userFriendlyAddress = useTonAddress();

    const { seqno } = useParams();

    const client = useTonClient();

    const wallet = useTonWallet();

    const { getKeyIndex, setItem } = useStorage();

    const navigate = useNavigate();

    const [safeContractAddress, setSafeContractAddress] = useState(null);

    useEffect(() => {
        if (!client || !wallet || safeContractAddress) {
            return;
        }
        const fetchSafeContract = async () => {
            const mintContract = Minter.fromAddress(Address.parse(contractAddress));
            const openMintContract = client.open(mintContract);
            const currentSeqno = await openMintContract.getGetSeqno();

            try {
                console.log("passed seqno", seqno);

                const mySeqno = BigInt(seqno).value;

                if (currentSeqno === mySeqno) {
                    console.log("fail, reload");
                    await sleep(3000);
                    fetchSafeContract();
                    return;
                }

                const walletAddress = Address.parse(userFriendlyAddress);

                const address = await openMintContract.getGetAddressContract(walletAddress, mySeqno);
                console.log("address contract - ", address.toString());

                const safeContract = Safe.fromAddress(address);
                const openSafeContract = client.open(safeContract);

                const owner = await openSafeContract.getGetOwner();
                console.log("is my contract", owner.equals(walletAddress));

                if (!owner.equals(walletAddress)) {
                    // edge case handling
                }

                const balance = await openSafeContract.getGetContractBalance();
                console.log("contract balance - ", balance);

                const goal = await openSafeContract.getGetGoalDetail();
                console.log("goal - ", goal);

                const res = {
                    owner: userFriendlyAddress,
                    contract: address.toString(),
                    name: goal.name,
                    deadline: Number(goal.deadline),
                    amount: Number(goal.amount)
                };

                await updateStorage(res);

                setSafeContractAddress(address.toString());
            } catch (e) {
                console.log("error contract", e);
                await sleep(3000);
                fetchSafeContract();
                return;
            }
        }

        fetchSafeContract();
        // eslint-disable-next-line
    }, [client, wallet]);

    const updateStorage = async (res) => {
        console.log("CALL STORAGE");
        const index = await getKeyIndex();
        await setItem(index.toString(), JSON.stringify(res));
    }

    return(
        <Page body={"secondary"} header={"secondary"} isBack={true}>
            <Placeholder
                title={!safeContractAddress ? t("key_51") : t("key_53")}
                description={!safeContractAddress ? t("key_52") : t("key_54")}
                animation={!safeContractAddress ? "clock" : "success"}
            />
            { safeContractAddress
                ?
                <MainButton
                    text={t("key_63")}
                    onClick={() => navigate(`/detail/${safeContractAddress}`, { replace: true })}
                />
                : null
            }
        </Page>
    );

}

export default Confirm;