import Placeholder from "../../components/Placeholder/Placeholder";
import {useTranslation} from "react-i18next";
import Page from "../../components/Page/Page";
import {useIsConnectionRestored, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import Loader from "../../components/Loader/Loader";
import {Fragment} from "react";
import {MainButton} from "@twa-dev/sdk/react";
import Spacing from "../../components/Spacing/Spacing";
import WalletCell from "../../components/WalletCell/WalletCell";

const Wallet = () => {

    const { t } = useTranslation();

    const [tonConnectUI] = useTonConnectUI();

    const wallet = useTonWallet();

    const isConnectionRestored = useIsConnectionRestored();

    const connect = () => {
        tonConnectUI.connectWallet().then((result) => {
            console.log("connect", result);
        }).catch((e) => {
            console.log("error", e)
        })
    }

    const disconenct = () => {
        tonConnectUI.disconnect().then(() => {
            console.log("disconnect");
        });
    }

    return(
        <Page body={"secondary"} header={"secondary"} isBack={true}>
            { !isConnectionRestored
                ?
                <Loader/>
                :
                <Fragment>
                    { !wallet
                        ?
                        <Fragment>
                            <Placeholder
                                title={t("key_33")}
                                description={t("key_34")}
                                animation={"diamond"}
                            />
                            <MainButton text={t("key_35")} onClick={connect} />
                        </Fragment>
                        :
                        <Fragment>
                            <Spacing size={28}/>
                            <WalletCell/>
                            <MainButton color={"#df3f40"} text={t("key_37")} onClick={disconenct} />
                        </Fragment>
                    }
                </Fragment>
            }
        </Page>
    );

}

export default Wallet;