import Spacing from "../../components/Spacing/Spacing";
import Div from "../../components/Div/Div";
import Title from "../../components/Typography/Title/Title";
import Page from "../../components/Page/Page";
import {useTranslation} from "react-i18next";
import {useRecoilState} from "recoil";
import {createFormState} from "../../store/CreateFormState";
import Input from "../../components/Form/Input/Input";
import {MainButton} from "@twa-dev/sdk/react";
import TonIcon20 from "../../components/Icons/TonIcon20";
import {useNavigate} from "react-router-dom";

const AmountStep = () => {

    const navigate = useNavigate();

    const { t } = useTranslation();

    const [form, setForm] = useRecoilState(createFormState);

    const changeAmount = (e) => {
        let value = e.target.value;
        // eslint-disable-next-line
        if (+value !== +value) { // check number
            return;
        }
        setForm((prevState) => ({
            ...prevState,
            amount: e.target.value,
        }));
    }

    return(
        <Page body={"primary"} header={"primary"} isBack={true}>
            <Spacing size={8}/>
            <Div>
                <Title>{ t("key_41") }</Title>
            </Div>
            <Input
                type={"number"}
                autoFocus={true}
                placeholder={"100"}
                value={form.amount}
                after={<TonIcon20 size={24} color={"var(--tg-theme-text-color)"}/>}
                onChange={changeAmount}
            />
            { form.amount.length
                ? <MainButton text={t("key_44")} onClick={() => navigate("/create_3", { replace: true })} />
                : null
            }
        </Page>
    );

}

export default AmountStep;