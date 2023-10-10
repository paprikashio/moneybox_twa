import Page from "../../components/Page/Page";
import {MainButton} from "@twa-dev/sdk/react";
import {useTranslation} from "react-i18next";
import WalletCell from "../../components/WalletCell/WalletCell";
import Spacing from "../../components/Spacing/Spacing";
import {useRecoilState} from "recoil";
import {createFormState} from "../../store/CreateFormState";
import List from "../../components/List/List";
import Cell from "../../components/Cell/Cell";
import Text from "../../components/Typography/Text/Text";
import Subtitle from "../../components/Typography/Subtitle/Subtitle";
import Container from "../../components/Container/Container";
import {Fragment, useState} from "react";
import Loader from "../../components/Loader/Loader";
import {toNano} from "ton";
import {contractAddress} from "../../consts/config";
import {Minter, MintTarget} from "../../contracts/Minter/tact_Minter.ts";
import {Address} from "ton-core";
import {useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import usePopup from "../../hooks/usePopup";
import {useNavigate} from "react-router-dom";
import useTonClient from "../../hooks/useTonClient";
import DateName from "../../components/DateName/DateName";

const Mint = () => {

    const { t } = useTranslation();

    const [tonConnectUI] = useTonConnectUI();

    const wallet = useTonWallet();

    const navigate = useNavigate();

    const popup = usePopup();

    const [form] = useRecoilState(createFormState);

    const [isActiveMint, setIsActiveMint] = useState(true);

    const client = useTonClient();

    const contractDeploy = async () => {
        const mintContract = Minter.fromAddress(Address.parse(contractAddress));
        const openMintContract = client.open(mintContract);

        const seqno = await openMintContract.getGetSeqno();
        console.log("seqno", seqno);

        const message = {
            $$type: 'MintTarget',
            query_id: 0n,
            name: form.target,
            amount: toNano(form.amount),
            deadline: Math.round(form.date / 1000),
            image: "empty"
        };

        await openMintContract.send({
            send: async (args) => {
                await tonConnectUI.sendTransaction({
                    messages: [
                        {
                            address: args.to.toString(),
                            amount: args.value.toString(),
                            payload: args.body?.toBoc().toString("base64"),
                        },
                    ],
                    validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
                }).then(() => {
                    setIsActiveMint(false);
                    navigate(`/confirm/${seqno}`, { replace: true });
                }).catch(() => showError());
            },
            address: wallet?.account?.address ? Address.parse(wallet?.account?.address) : undefined
        }, {
            value: toNano("0.08")
        }, message);
    }

    const showError = () => {
        popup({
            title: t("key_49"),
            message: t("key_50"),
        });
    }

    return(
        <Page body={"secondary"} header={"primary"} isBack={true}>
            <Fragment>
                { !client
                    ?
                    <Loader/>
                    :
                    <Fragment>
                        <Spacing size={28}/>
                        <WalletCell isAction={true}/>
                        <Spacing size={28}/>
                        <Container mode={"primary"} title={t("key_47")} rounded={true}>
                            <List>
                                <Cell
                                    subtitle={<Text>{ form.target }</Text>}
                                    title={
                                        <Subtitle mode={"secondary"}>
                                            { t("key_40") }
                                        </Subtitle>
                                    }
                                />
                                <Cell
                                    subtitle={<Text>{ form.amount } TON</Text>}
                                    title={
                                        <Subtitle mode={"secondary"}>
                                            { t("key_41") }
                                        </Subtitle>
                                    }
                                />
                                <Cell
                                    subtitle={<Text><DateName date={form.date.getTime() / 1000}/></Text>}
                                    title={
                                        <Subtitle mode={"secondary"}>
                                            { t("key_48") }
                                        </Subtitle>
                                    }
                                />
                            </List>
                        </Container>
                        { isActiveMint && wallet ? <MainButton text={t("key_43")} onClick={contractDeploy}/> : null }
                    </Fragment>
                }
            </Fragment>
        </Page>
    );

}

export default Mint;