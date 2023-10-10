import Page from "../../../components/Page/Page";
import Balance from "./Balance";
import {Fragment, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import useTonClient from "../../../hooks/useTonClient";
import {Safe} from "../../../contracts/Safe/tact_Safe.ts";
import {Address} from "ton-core";
import Summary from "./Summary";
import Transactions from "./Transactions";
import Spacing from "../../../components/Spacing/Spacing";
import {tonApiLink} from "../../../consts/config";
import usePopup from "../../../hooks/usePopup";
import {useTranslation} from "react-i18next";
import {useInterval} from "usehooks-ts";
import useStorage from "../../../hooks/useStorage";
import {MainButton} from "@twa-dev/sdk/react";

const Detail = () => {

    const { address } = useParams();

    const { t } = useTranslation();

    const { removeItem, getKeys, getItems } = useStorage();

    const client = useTonClient();

    const popup = usePopup();

    const navigate = useNavigate();

    const [progress, setProgress] = useState(false);
    const [isInit, setIsInit] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const [owner, setOwner] = useState("");
    const [goal, setGoal] = useState({
        amount: 0,
        deadline: 0,
        name: "",
    });

    useEffect(() => {
        if (!client) {
            return;
        }
        const fetchSafeContract = async () => {
            const safeContract = Safe.fromAddress(Address.parse(address));
            const openSafeContract = client.open(safeContract);

            const owner = await openSafeContract.getGetOwner();
            console.log("owner", owner.toString());
            console.log("address", address)
            setOwner(owner.toString());

            const balance = await openSafeContract.getGetContractBalance();
            console.log("contract balance - ", balance);
            setBalance(Number(balance));

            const goal = await openSafeContract.getGetGoalDetail();
            console.log("goal - ", goal);
            setGoal({
                amount: Number(goal.amount),
                deadline: Number(goal.deadline),
                name: goal.name
            });

            setIsInit(true);
        }

        fetchSafeContract();
        // eslint-disable-next-line
    }, [client]);

    useInterval(
        () => {
            const getTransactions = async () => {
                const response = await fetch(`${tonApiLink}blockchain/accounts/${address}/transactions`);
                try {
                    const res = await response.json();
                    setTransactions(res.transactions);
                    const safeContract = Safe.fromAddress(Address.parse(address));
                    const openSafeContract = client.open(safeContract);
                    const balance = await openSafeContract.getGetContractBalance();
                    setBalance(Number(balance));
                } catch (e) {
                    popup({
                        title: t("key_49"),
                        message: t("key_71"),
                    });
                }
            }

            getTransactions();
        },
        // Delay in milliseconds or null to stop it
        isInit ? 5000 : null,
    )

    const searchItemForRemove = async () => {
        setProgress(true);
        const keys = await getKeys();
        const items = await getItems(keys);
        items.forEach((item, index) => {
            const obj = JSON.parse(item);
            if (obj.contract === address) {
                removeItem(index.toString()).then(() => {
                    console.log("success remove");
                    navigate(-1);
                    setProgress(true);
                }).catch((e) => {
                    console.log(e);
                });
            }
        });
    }

    const removeBox = async () => {
        const key = await searchItemForRemove();
        console.log("rey for removing", key);
    }

    return(
        <Page body={"secondary"} header={"primary"} isBack={true}>
            { isInit
                ?
                <Fragment>
                    <Balance
                        balance={balance}
                        owner={owner}
                        amount={goal.amount}
                        address={address}
                        deadline={goal.deadline}
                    />
                    <Summary
                        address={address}
                        owner={owner}
                        name={goal.name}
                        deadline={goal.deadline}
                    />
                    <Spacing size={18}/>
                    <Transactions list={transactions}/>
                </Fragment>
                :
                <Loader/>
            }
            { !balance && Math.round(Date.now() / 1000) >= goal.deadline && isInit
                ? <MainButton text={t("key_73")} color={"#df3f40"} onClick={removeBox} progress={progress}/>
                : null
            }
        </Page>
    );

}

export default Detail;