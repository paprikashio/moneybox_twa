import Spacing from "../../components/Spacing/Spacing";
import Page from "../../components/Page/Page";
import Div from "../../components/Div/Div";
import Title from "../../components/Typography/Title/Title";
import {useTranslation} from "react-i18next";
import {MainButton} from "@twa-dev/sdk/react";
import Input from "../../components/Form/Input/Input";
import {useRecoilState} from "recoil";
import {createFormState} from "../../store/CreateFormState";
import {useNavigate} from "react-router-dom";

const TargetStep = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [form, setForm] = useRecoilState(createFormState);

    const changeTarget = (e) => {
        const limit = 50;
        const value = e.target.value;
        setForm((prevState) => ({
            ...prevState,
            target: value.slice(0, limit)
        }));
    }

    return(
        <Page body={"primary"} header={"primary"} isBack={true}>
            <Spacing size={8}/>
            <Div>
                <Title>{ t("key_40") }</Title>
            </Div>
            <Input
                autoFocus={true}
                value={form.target}
                placeholder={t("key_45")}
                hint={`${form.target.length} / 50`}
                onChange={changeTarget}
            />
            { form.target.length
                ? <MainButton text={t("key_44")} onClick={() => navigate("/create_2", { replace: true })} />
                : null
            }
        </Page>
    );

}

export default TargetStep;