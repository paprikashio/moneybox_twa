import List from "../List/List";
import Cell from "../Cell/Cell";
import Avatar from "../Avatar/Avatar";
import Text from "../Typography/Text/Text";
import {getShortAddress} from "../../helpers/common";
import Subtitle from "../Typography/Subtitle/Subtitle";
import Container from "../Container/Container";
import { useTonAddress, useTonWallet} from "@tonconnect/ui-react";
import {useTranslation} from "react-i18next";
import TonIcon20 from "../Icons/TonIcon20";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const WalletCell = ({ isAction }) => {

    const { t } = useTranslation();

    const wallet = useTonWallet();

    const userFriendlyAddress = useTonAddress();

    const navigate = useNavigate();

    return(
        <Container mode={"primary"} title={t("key_36")} rounded={true}>
            <List>
                { !wallet
                    ?
                    <Cell
                        before={<Avatar color={"#000000"}><TonIcon20 size={28} color={"var(--text-overlay)"}/></Avatar>}
                        title={<Text mode={"destructive"}>{ t("key_12") }</Text>}
                        subtitle={
                            <Subtitle mode={"secondary"}>
                                { t("key_46") }
                            </Subtitle>
                        }
                        onClick={() => navigate("/wallet")}
                    />
                    :
                    <Cell
                        before={<Avatar color={"#000000"} src={wallet.imageUrl}/>}
                        title={<Text>{ getShortAddress(userFriendlyAddress) }</Text>}
                        subtitle={
                            <Subtitle mode={"secondary"}>
                                { wallet.device.appName } { wallet.device.appVersion }, { wallet.device.platform }
                            </Subtitle>
                        }
                        onClick={isAction ? () => navigate("/wallet") : null}
                    />
                }
            </List>
        </Container>
    );

}

WalletCell.propTypes = {
    isAction: PropTypes.bool,
};

WalletCell.defaultProps = {
    isAction: false,
};

export default WalletCell;