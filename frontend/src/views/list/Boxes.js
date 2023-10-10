import Container from "../../components/Container/Container";
import Cell from "../../components/Cell/Cell";
import Avatar from "../../components/Avatar/Avatar";
import Text from "../../components/Typography/Text/Text";
import Subtitle from "../../components/Typography/Subtitle/Subtitle";
import List from "../../components/List/List";
import BoxOutline28 from "../../components/Icons/BoxOutline28";
import PropTypes from "prop-types";
import {fromNano} from "ton-core";
import {useTranslation} from "react-i18next";
import DateName from "../../components/DateName/DateName";
import {Fragment} from "react";
import {useNavigate} from "react-router-dom";

const Boxes = ({ title, list }) => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const currentTime = Math.round(Date.now() / 1000);

    return(
        <Container mode={"primary"} title={title}>
            <List>
                {list.map((item, index) => (
                    <Cell
                        key={"box_" + item.contract + "_" + currentTime}
                        before={
                            <Avatar color={currentTime >= item.deadline ? "var(--success-gradient)" : null}>
                                <BoxOutline28 color={"var(--text-overlay)"}/>
                            </Avatar>
                        }
                        title={<Text>{ item.name }</Text>}
                        subtitle={
                            <Subtitle>
                                { t("key_55") } <DateName date={item.deadline}/>
                            </Subtitle>
                        }
                        after={
                            <Fragment>
                                <Text>{ fromNano(item.amount) } TON</Text>
                            </Fragment>
                        }
                        onClick={() => navigate(`/detail/${item.contract}`)}
                    />
                ))}
            </List>
        </Container>
    );

}

Boxes.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
};

export default Boxes;