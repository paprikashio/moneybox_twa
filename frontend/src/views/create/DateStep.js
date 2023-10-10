import Spacing from "../../components/Spacing/Spacing";
import Div from "../../components/Div/Div";
import Title from "../../components/Typography/Title/Title";
import Page from "../../components/Page/Page";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import {MainButton} from "@twa-dev/sdk/react";
import {useRecoilState} from "recoil";
import {createFormState} from "../../store/CreateFormState";

const DateStep = () => {

    const navigate = useNavigate();

    const { t } = useTranslation();

    const [form, setForm] = useRecoilState(createFormState);

    const changeDate = (date) => {
        if (date) {
            setForm((prevState) => ({
                ...prevState,
                date: date
            }));
        }
    }

    return(
        <Page body={"primary"} header={"primary"} isBack={true}>
            <Spacing size={8}/>
            <Div>
                <Title>{ t("key_42") }</Title>
                <Spacing size={28}/>
                <DatePicker value={form.date} onChange={changeDate}/>
            </Div>
            { form.date ? <MainButton text={t("key_44")} onClick={() => navigate("/mint", { replace: true })} /> : null }
        </Page>
    );

}

export default DateStep;