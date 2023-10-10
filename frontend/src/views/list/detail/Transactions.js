import Container from "../../../components/Container/Container";
import {useTranslation} from "react-i18next";
import {Fragment, useContext} from "react";
import PropTypes from "prop-types";
import List from "../../../components/List/List";
import Loader from "../../../components/Loader/Loader";
import Cell from "../../../components/Cell/Cell";
import Subtitle from "../../../components/Typography/Subtitle/Subtitle";
import {getShortHash} from "../../../helpers/common";
import Text from "../../../components/Typography/Text/Text";
import DateName from "../../../components/DateName/DateName";
import {fromNano} from "ton-core";
import {tonViewerLink} from "../../../consts/config";
import {ConfigContext} from "../../../components/ConfigProvider/ConfigProvider";

const Transactions = ({ list }) => {

    const { webAppInstance } = useContext(ConfigContext);

    const { t } = useTranslation();

    const openHash = (hash) => {
        webAppInstance.openLink(`${tonViewerLink}transaction/${hash}`);
    }

    return(
        <Fragment>
            { !list.length
                ?
                <Loader/>
                :
                <Container mode={"primary"} title={t("key_65")} rounded={true}>
                    <List>
                        {list.map((item, index) => (
                            <Cell
                                key={"transaction_" + index}
                                title={<Text>{ getShortHash(item.hash) }</Text>}
                                subtitle={<Subtitle>{ <DateName date={item.utime} needTime={true}/> }</Subtitle>}
                                after={
                                    <div>
                                        { item.out_msgs.length
                                            ?
                                            <Text mode={"destructive"}>- { fromNano(item.out_msgs[0].value) } TON</Text>
                                            :
                                            null
                                        }
                                        <Text mode={"success"}>+ { fromNano(item.in_msg.value) } TON</Text>
                                    </div>
                                }
                                onClick={() => openHash(item.hash)}
                            />
                        ))}
                    </List>
                </Container>
            }
        </Fragment>
    );

}

Transactions.propTypes = {
    list: PropTypes.array.isRequired
};

export default Transactions;