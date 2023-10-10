import Text from "../../../components/Typography/Text/Text";
import Spacing from "../../../components/Spacing/Spacing";
import SuperTitle from "../../../components/Typography/SuperTitle/SuperTitle";
import Subtitle from "../../../components/Typography/Subtitle/Subtitle";
import Button from "../../../components/Button/Button";
import DownOutline28 from "../../../components/Icons/DownOutline28";
import UpOutline28 from "../../../components/Icons/UpOutline28";
import Div from "../../../components/Div/Div";
import diamondAnimation from "../../../assets/animations/diamond_2.json";
import {useTranslation} from "react-i18next";
import {useLottie} from "lottie-react";
import PropTypes from "prop-types";
import {Address, beginCell, fromNano} from "ton-core";
import Container from "../../../components/Container/Container";
import {Fragment, useState} from "react";
import BottomSheet from "../../../components/BottomSheet/BottomSheet";
import TonIcon20 from "../../../components/Icons/TonIcon20";
import Input from "../../../components/Form/Input/Input";
import {MainButton} from "@twa-dev/sdk/react";
import usePopup from "../../../hooks/usePopup";
import {useTonAddress, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import {useNavigate} from "react-router-dom";

const Balance = ({ balance, amount, address, deadline, owner }) => {

    const animationOptions = {
        animationData: diamondAnimation,
        loop: true
    }

    const userFriendlyAddress = useTonAddress();

    const popup = usePopup();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const { View } = useLottie(animationOptions);

    const [tonConnectUI] = useTonConnectUI();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [deposit, setDeposit] = useState("");

    const wallet = useTonWallet();

    const changeAmount = (e) => {
        let value = e.target.value;
        // eslint-disable-next-line
        if (+value !== +value) { // check number
            return true;
        }
        setDeposit(e.target.value);
    }

    const openAmountModal = () => {
        if (!wallet) {
            navigate("/wallet");
        }
        setIsOpenModal(true);
    }

    const createDeposit = () => {
        if (!deposit.length) {
            popup({
                title: t("key_49"),
                message: t("key_67"),
            });
            return;
        }
        setIsOpenModal(false);
        tonConnectUI.sendTransaction({
            validUntil: Math.floor(Date.now() / 1000) + 600,
            messages: [
                {
                    address: address,
                    amount: deposit * 1000000000
                }
            ],
        }).then(() => {
            popup({
                title: t("key_53"),
                message: t("key_70"),
            });
        }).catch((e) => {
            console.log("error", e);
        });
    }

    const createWithdrawal = () => {
        if (!balance) {
            popup({
                title: t("key_49"),
                message: t("key_68"),
            });
            return;
        }
        if (Math.round(Date.now() / 1000) < deadline) {
            popup({
                title: t("key_49"),
                message: t("key_69"),
            });
            return;
        }
        const currentWalletAddress = Address.parse(userFriendlyAddress);
        const ownerAddress = Address.parse(owner);
        if (!currentWalletAddress.equals(ownerAddress)) {
            popup({
                title: t("key_49"),
                message: t("key_72"),
            });
            return;
        }
        const body = beginCell()
            .storeUint(0, 32)
            .storeStringTail("withdrawal")
            .endCell();
        tonConnectUI.sendTransaction({
            validUntil: Math.floor(Date.now() / 1000) + 600,
            messages: [
                {
                    address: address,
                    amount: 0.02 * 1000000000,
                    payload: body.toBoc().toString("base64")
                }
            ],
        }).then(() => {
            popup({
                title: t("key_53"),
                message: t("key_70"),
            });
        }).catch((e) => {
            console.log("error", e);
        });
    }

    return(
        <Fragment>
            <BottomSheet title={t("key_66")} isVisible={isOpenModal} onClose={() => setIsOpenModal(false)}>
                <Input
                    type={"number"}
                    placeholder={"100"}
                    value={deposit}
                    after={<TonIcon20 size={24} color={"var(--tg-theme-text-color)"}/>}
                    onChange={changeAmount}
                />
            </BottomSheet>
            { isOpenModal
                ?
                <MainButton text={t("key_44")} onClick={createDeposit} />
                :
                null
            }
            <Container mode={"secondary"}>
                <Div top={28} bottom={28}>
                    <div className={"d-flex space-between align-center"} style={{ overflowX: "hidden" }}>
                        <div>
                            <Text weight={"bold"}>{ t("key_56") }</Text>
                            <Spacing size={16}/>
                            <div className={"d-flex align-center"}>
                                <SuperTitle>{ fromNano(balance) }</SuperTitle>
                            </div>
                        </div>
                        <div style={{ width: 100 }}>
                            { View }
                        </div>
                    </div>
                    <Spacing size={28}/>
                    <div className={"d-flex start align-center"}>
                        <div>
                            <Subtitle mode={"secondary"}>{ t("key_58") }</Subtitle>
                            <Spacing size={6}/>
                            <Subtitle mode={"primary"} weight={"bold"}>{ fromNano(amount) } TON</Subtitle>
                        </div>
                        <Spacing size={20} mode={"horizontal"}/>
                        <div>
                            <Subtitle mode={"secondary"}>{ t("key_59") }</Subtitle>
                            <Spacing size={6}/>
                            <Subtitle mode={"primary"} weight={"bold"}>{ fromNano((amount - balance)) } TON</Subtitle>
                        </div>
                    </div>
                    <Spacing size={28}/>
                    <div className={"d-flex align-center"}>
                        <Button
                            before={<DownOutline28 color={"var(--tg-theme-button-text-color)"} size={20}/>}
                            onClick={openAmountModal}
                        >
                            { t("key_60") }
                        </Button>
                        <Spacing size={16} mode={"horizontal"}/>
                        <Button
                            before={<UpOutline28 color={"var(--tg-theme-button-text-color)"} size={20}/>}
                            onClick={createWithdrawal}
                        >
                            { t("key_61") }
                        </Button>
                    </div>
                </Div>
            </Container>
        </Fragment>
    );

}

Balance.propTypes = {
    balance: PropTypes.number,
    amount: PropTypes.number,
    deadline: PropTypes.number,
    address: PropTypes.string,
    owner: PropTypes.string
};

Balance.defaultProps = {
    balance: 0,
    amount: 0,
    address: "-",
    deadline: 0,
    owner: "-"
};

export default Balance;