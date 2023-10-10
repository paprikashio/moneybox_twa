import List from "../../../components/List/List";
import Cell from "../../../components/Cell/Cell";
import Text from "../../../components/Typography/Text/Text";
import Subtitle from "../../../components/Typography/Subtitle/Subtitle";
import {getShortAddress} from "../../../helpers/common";
import ArrowUp from "../../../components/Icons/ArrowUp";
import Container from "../../../components/Container/Container";
import {tonViewerLink} from "../../../consts/config";
import {useContext} from "react";
import {ConfigContext} from "../../../components/ConfigProvider/ConfigProvider";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import DateName from "../../../components/DateName/DateName";

const Summary = ({ name, address, owner, deadline }) => {

    const { webAppInstance } = useContext(ConfigContext);

    const { t } = useTranslation();

    const openAddress = (address) => {
        webAppInstance.openLink(`${tonViewerLink}${address}`);
    }

    return (
        <Container mode={"primary"} title={t("key_47")} rounded={true}>
            <List>
                <Cell
                    title={<Text>{ name }</Text>}
                    subtitle={<Subtitle>{ t("key_40") }</Subtitle>}
                />
                <Cell
                    title={<Text><DateName date={deadline}/></Text>}
                    subtitle={<Subtitle>{ t("key_48") }</Subtitle>}
                />
                <Cell
                    title={<Text>{ getShortAddress(address) }</Text>}
                    subtitle={<Subtitle>{ t("key_62") }</Subtitle>}
                    after={<ArrowUp color={"var(--tg-theme-hint-color)"} size={20}/>}
                    onClick={() => openAddress(address)}
                />
                <Cell
                    title={<Text>{ getShortAddress(owner) }</Text>}
                    subtitle={<Subtitle>{ t("key_64") }</Subtitle>}
                    after={<ArrowUp color={"var(--tg-theme-hint-color)"} size={20}/>}
                    onClick={() => openAddress(owner)}
                />
            </List>
        </Container>
    );

}

Summary.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    owner: PropTypes.string,
    deadline: PropTypes.number,
};

Summary.defaultProps = {
    name: "-",
    address: "-",
    owner: "-",
    deadline: 0
};

export default Summary;