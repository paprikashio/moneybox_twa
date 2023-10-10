import {TonClient} from "ton";
import {getHttpEndpoint} from "@orbs-network/ton-access";
import {network} from "../consts/config";
import {useEffect, useState} from "react";

const useTonClient = () => {

    const [client, setClient] = useState(null);

    useEffect(() => {
        if (client) {
            return;
        }
        const fetchClient = async () => {
            return new TonClient({
                endpoint: await getHttpEndpoint({
                    network: network
                })
            });
        }

        fetchClient().then((result) => {
            setClient(result);
        }).catch((e) => {
            console.log("error", e);
        });
    }, [client]);

    return client;

}

export default useTonClient;