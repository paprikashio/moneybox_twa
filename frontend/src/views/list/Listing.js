import {useNavigate} from "react-router-dom";
import {useElementSize} from "usehooks-ts";
import {useTranslation} from "react-i18next";
import Page from "../../components/Page/Page";
import Div from "../../components/Div/Div";
import Tabs from "../../components/Tabs/Tabs";
import Separator from "../../components/Separator/Separator";
import Container from "../../components/Container/Container";
import Spacing from "../../components/Spacing/Spacing";
import Placeholder from "../../components/Placeholder/Placeholder";
import AddOutline28 from "../../components/Icons/AddOutline28";
import Fab from "../../components/Fab/Fab";
import useStorage from "../../hooks/useStorage";
import {Fragment, useEffect, useState} from "react";
import Loader from "../../components/Loader/Loader";
import Boxes from "./Boxes";
import usePopup from "../../hooks/usePopup";


const Listing = () => {

    const navigate = useNavigate();

    const [tabRef, { height }] = useElementSize();

    const { t } = useTranslation();

    const { getKeys, getItems } = useStorage();

    const popup = usePopup();

    const [actives, setActives] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        t("key_8"),
        t("key_9")
    ];

    useEffect(() => {
        getKeys().then((result) => {
            if (!result.length) {
                setLoading(false);
                return;
            }
            getItems(result).then((array) => {
                const unix =  Math.round(Date.now() / 1000);
                let a = [];
                let c = [];
                array.forEach((item) => {
                    const obj = JSON.parse(item);
                    if (unix >= obj.deadline) {
                        c.push(obj);
                    } else {
                        a.push(obj);
                    }
                });
                setActives(a);
                setCompleted(c);
                setLoading(false);
            })
        }).catch(e => {
            console.log("catch", e);
            popup({
                title: t("key_49"),
                message: t("key_7"),
            });
            return;
        })
        // eslint-disable-next-line
    }, []);

    const changeTab = (value) => {
        setActiveTab(value);
    }

    const placeholder = () => {
        return <Placeholder
            top={height + 18}
            title={t("key_38")}
            description={t("key_39")}
        />;
    }

    const listFragment = () => {
        if (activeTab === 0) {
            if (!actives.length) {
                return placeholder();
            } else {
                return <Boxes title={t("key_8")} list={actives}/>
            }
        } else {
            if (!completed.length) {
                return placeholder();
            } else {
                return <Boxes title={t("key_9")} list={completed}/>
            }
        }
    }

    const createNewBox = () => {
        const total = actives.length + completed.length;
        if (total > 20) {
            popup({
                title: t("key_49"),
                message: t("key_74"),
            });
            return;
        }
        navigate("/create_1");
    }

    return(
        <Page body={"secondary"} header={"primary"}>
            { loading
                ?
                <Loader/>
                :
                <Fragment>
                    <Container mode={"primary"} rounded={false} forwardRef={tabRef}>
                        <Div bottom={0} top={12} left={0} right={0}>
                            <Tabs
                                list={tabs}
                                onChange={changeTab}
                            />
                        </Div>
                        <Separator/>
                    </Container>
                    <Spacing size={18}/>
                    { listFragment() }
                </Fragment>
            }
            { !loading && <Fab onClick={() => createNewBox()}>
                <AddOutline28 color={"var(--tg-theme-button-text-color)"}/>
            </Fab> }
        </Page>
    );
}

export default Listing;